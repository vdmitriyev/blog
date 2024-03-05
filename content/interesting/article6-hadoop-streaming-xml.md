Title: Hadoop Streaming and XML with Python
Date: 2016-03-03 18:00
Tags: hadoop, streaming, xml, bigdata, python

<center>
    ![Hadoop Streaming and XML with Python]({filename}../images/random/hadoop-streaming.png)
</center>


The general idea behind current post is to show how parsing of single XML file with Python script could be implemented with Hadoop Streaming.

Trying [Hadoop Streaming](https://hadoop.apache.org/docs/r1.2.1/streaming.html#Hadoop+Streaming) on Hortonworks Virtual Machine (VM) image (HDP version is 2.3.1). For streaming XML use following [Hadoop Tutorial 2.1 -- Streaming XML Files](http://www.science.smith.edu/dftwiki/index.php/Hadoop_Tutorial_2.1_--_Streaming_XML_Files) article. All discussed Python scripts and XML data samples can be found at the end of current document in **Scripts and Files** section.


In case you have your own Hadoop installation and you are accessing machine via your own user and you are having exceptions with 'Permission denied:' it's better if you will start streaming jobs under the name of ```hdfs``` user. In Ubuntu you can switch to ```hdfs``` user with command ```sudo su hdfs -```.

### Loading Data

Loading data (don't forget to copy that to Hadoop machine locally). If you are running your virtual machine on Windows host than propably you will find [WinSCP](https://winscp.net/eng/download.php) useful.

```bash
hdfs dfs -mkdir /data/xml/inputs/
hdfs dfs -put /root/streaming/samplexml01.xml /data/xml/inputs/
```

Don't forget to copy Python scripts used within map-reduce phases on VM machine (where all commands are executed).

### Prerequisites (CentOS)

You will need to use ```dos2unix``` utility on your Hortonworks VM only in case your host machine is Windows.

```bash
yum install dos2unix
```

### Simple Option with XML

Note Hadoop location for Hortonworks image is ```/usr/hdp/current```.
Try simplest option of streaming with default linux commands.

```bash
hadoop jar /usr/hdp/current/hadoop-mapreduce-client/hadoop-streaming.jar \
    -input /data/xml/inputs/ \
    -output /data/xml/outputs/01/ \
    -mapper /bin/cat \
    -reducer /usr/bin/wc
```

Try simplest option of streaming with default linux commands and XML reader. Don't forget to remove previous output from HDFS, otherwise the MapReduce will thrown exception during execution (it cannot write it's output into existing directory).

```bash
hadoop jar /usr/hdp/current/hadoop-mapreduce-client/hadoop-streaming.jar \
    -inputreader "StreamXmlRecordReader,begin=xmlroot,end=/xmlroot" \
    -input /data/xml/inputs/ \
    -output /data/xml/outputs/02/ \
    -mapper /bin/cat \
    -reducer /usr/bin/wc
```

Please note that the common problem for errors is that Hadoop is not running streaming when output folder exists.

### Python and XML

Preparing Python scripts. Note that it other to make Python work on linux from command line directly (without explicitly calling ```python``` you need to use proper headline as the first line of your Python script).

```bash
chmod a+x ./mapper.py
chmod a+x ./reducer.py
```

In case your host system is Windows and guest is Linux, you need to convert between Windows and Linux file formats.

```bash
dos2unix mapper.py
dos2unix reducer.py
```

Local testing facilities... Running simple testing locally, which will allows you to test your script without "heavy" MapReduce.

```bash
cat samplexml01.xml | ./mapper.py | ./reducer.py
```

### Hadoop Cluster, Python and XML

Run Python scripts inside Hadoop cluster.

```bash
hadoop jar /usr/hdp/current/hadoop-mapreduce-client/hadoop-streaming.jar \
    -input /data/xml/inputs/ \
    -output /data/xml/outputs/04/ \
    -file mapper.py \
    -file reducer.py \
    -mapper ./mapper.py \
    -reducer ./reducer.py
```

### Monitoring Resources of the Hortonworks VM

* [http://localhost:8088/cluster](http://localhost:8088/cluster)
* [http://localhost:50070/dfshealth.html#tab-overview](http://localhost:50070/dfshealth.html#tab-overview)
* [http://localhost:8000/filebrowser/view/data/xml/outputs](http://localhost:8000/filebrowser/view/data/xml/outputs)
* [http://localhost:8080/#/main/dashboard/metrics](http://localhost:8080/#/main/dashboard/metrics)


</br>

## Scripts and Files

Simpler mapper (version 1)

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
from collections import defaultdict as defaultdict

# some constants for local debugging
_input_file = 'input.txt'
_output_file = 'output.txt'

def _mapper():
    """ Mapper that iterates through particular tags of XML file."""

    inText = False
    currentTag = None
    tags = ['ticketsection']

    for line in sys.stdin:

        line = line.strip()
        for tag in tags:

            if line.find( '<' + tag) != -1:
                #print '[i] start copying'
                inText = True
                currentTag = tag

            if line.find('</' + tag + '>') != -1:
                #print '[i] stop copying'
                inText = False
                currentTag = None

        if inText:
            print('{0}\t{1}'.format(currentTag, line))

def run(from_file=False):
    """ Running scripts methods """

    if (from_file):
        sys.stdin = open(_input_file, "r")
        sys.stdout = open(_output_file, "w")

    _mapper()

if __name__ == '__main__':
    #run(True)
    run()
```

Simpler reducer

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
from collections import defaultdict as defaultdict

# some constants for local debugging
_input_file = 'input.txt'
_output_file = 'output.txt'

def _reducer():
    """ Reducer that iterates through provided input and just prints it."""

    for line in sys.stdin:
        line = line.strip()
        tag, text = line.split('\t')
        print('{0}:\t{1}'.format(tag, text))

def run(from_file=False):
    """ Running scripts methods """

    if (from_file):
        sys.stdin = open(_input_file, "r")
        sys.stdout = open(_output_file, "w")

    _reducer()

if __name__ == '__main__':
    #run(True)
    run()
```

File samplexml01.xml to be used by scripts

```xml
<?xml version="1.0" encoding="utf-8"?>
<xmlroot xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <pather guid="00011a0330-432432-4324-434324-4324353245sfds">
     <ticketsection>
       <attribute value="EN" name="DefaultLanguage"/>
       <attribute value="New Value" name="SomeValues"/>
      </ticketsection>
  </pather>
</xmlroot>

```

Simpler mapper (version 2)

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
from collections import defaultdict as defaultdict
from xml.etree import ElementTree

import uuid  # added

# some constants for local debugging
_input_file = 'input.txt'
_output_file = 'output.txt'

def _mapper():
	""" Mapper that reads whole XML file and sends it to Reducer."""

    xml = ''
    unique_key = str(uuid.uuid4().get_hex().upper())

    for line in sys.stdin:
        line = line.strip()
        xml += line #+ '\n'

    print ('{0}\t{1}'.format(unique_key, xml))

    try:
        root = ElementTree.fromstring(xml)
        print ('{0}\t{1}'.format(unique_key, str(root)))
    except Exception,ex:
        print ('{0}\t[e]{1}'.format(unique_key, str(ex)))


def run(from_file=False):
    """ Running scripts methods """

    if (from_file):
        sys.stdin = open(_input_file, "r")
        sys.stdout = open(_output_file, "w")

    _mapper()

if __name__ == '__main__':
    #run(True)
    run()
```
