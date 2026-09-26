/*!
 * Theme for `simplify-next
 */

/* dark / light theme switch (see the FOUC-prevention script in base.html <head>) */
var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', next);
        try {
            localStorage.setItem('theme', next);
        } catch (err) {
            // ignore (e.g. blocked storage)
        }

        var pygmentsStyle = document.getElementById('pygmentsStyle');
        if (pygmentsStyle) {
            pygmentsStyle.href = next === 'dark'
                ? 'https://cdn.jsdelivr.net/gh/richleland/pygments-css/monokai.css'
                : 'https://cdn.jsdelivr.net/gh/richleland/pygments-css/friendly.css';
        }
    });
}

/* GDPR cookie-consent banner (see the consent-state script in base.html <head>,
 * and the __gdprPendingLoaders queue each gated tracker include pushes onto) */
var gdprBanner = document.getElementById('gdprConsentBanner');
if (gdprBanner) {
    var storedConsent = null;
    try {
        storedConsent = localStorage.getItem('gdprConsent');
    } catch (err) {
        // ignore (e.g. blocked storage)
    }
    if (!storedConsent) {
        gdprBanner.classList.remove('d-none');
    }

    var hideConsentBanner = function () {
        gdprBanner.classList.add('d-none');
    };

    var gdprConsentAccept = document.getElementById('gdprConsentAccept');
    if (gdprConsentAccept) {
        gdprConsentAccept.addEventListener('click', function () {
            try {
                localStorage.setItem('gdprConsent', 'accepted');
            } catch (err) {
                // ignore (e.g. blocked storage)
            }
            window.gdprConsentGiven = true;
            (window.__gdprPendingLoaders || []).forEach(function (load) { load(); });
            hideConsentBanner();
        });
    }

    var gdprConsentReject = document.getElementById('gdprConsentReject');
    if (gdprConsentReject) {
        gdprConsentReject.addEventListener('click', function () {
            try {
                localStorage.setItem('gdprConsent', 'rejected');
            } catch (err) {
                // ignore (e.g. blocked storage)
            }
            hideConsentBanner();
        });
    }
}

/* force to hide expanded navbar when scroll down */
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    var navbarMenu = document.getElementById('navbarMenu');
    if (scroll >= 150 && navbarMenu) {
        bootstrap.Collapse.getOrCreateInstance(navbarMenu, { toggle: false }).hide();
    }

    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.style.display = scroll >= 300 ? 'block' : 'none';
    }
});

/* add classes into tables */
document.querySelectorAll('table:not(.highlighttable)').forEach(function (table) {
    table.classList.add('table', 'table-hover', 'table-sm');
    if (!table.classList.contains('table-borderless')) {
        table.classList.add('table-bordered');
    }
});
document.querySelectorAll('thead').forEach(function (thead) {
    thead.classList.add('table-light');
});

/* add classes into images */
document.querySelectorAll('img').forEach(function (img) {
    img.classList.add('img-fluid', 'mx-auto', 'shadow-lg');
});

/* action to back to top */
var backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* add a copy button to every code snippet */
function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    // Fallback for non-secure contexts / older browsers without Clipboard API
    return new Promise(function (resolve, reject) {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            resolve();
        } catch (err) {
            reject(err);
        } finally {
            document.body.removeChild(textarea);
        }
    });
}

/* sortable + filterable archives table */
var archivesTable = document.getElementById('archivesTable');
if (archivesTable) {
    var archivesBody = archivesTable.querySelector('tbody');
    var archivesRows = Array.prototype.slice.call(archivesBody.querySelectorAll('tr'));

    archivesTable.querySelectorAll('th[data-sort]').forEach(function (th, columnIndex) {
        th.addEventListener('click', function () {
            var type = th.dataset.sort;
            var ascending = th.dataset.dir !== 'asc';

            archivesTable.querySelectorAll('th[data-sort]').forEach(function (other) {
                if (other !== th) {
                    other.removeAttribute('data-dir');
                }
            });
            th.dataset.dir = ascending ? 'asc' : 'desc';

            archivesRows.sort(function (rowA, rowB) {
                var a = rowA.children[columnIndex].dataset.value;
                var b = rowB.children[columnIndex].dataset.value;
                var result = type === 'number' ? (parseFloat(a) - parseFloat(b)) : a.localeCompare(b);
                return ascending ? result : -result;
            });
            archivesRows.forEach(function (row) { archivesBody.appendChild(row); });
        });
    });

    var archivesFilter = document.getElementById('archivesFilter');
    if (archivesFilter) {
        archivesFilter.addEventListener('input', function () {
            var term = archivesFilter.value.trim().toLowerCase();
            archivesRows.forEach(function (row) {
                row.hidden = term !== '' && row.textContent.toLowerCase().indexOf(term) === -1;
            });
        });
    }
}

document.querySelectorAll('pre').forEach(function (pre) {
    if (pre.closest('.linenodiv')) {
        return; // skip the line-number gutter of a linenos-enabled code table
    }

    var container = pre.closest('.highlight') || pre;
    container.classList.add('code-copy-wrap');

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-sm btn-outline-secondary code-copy-btn';
    button.textContent = 'Copy';

    button.addEventListener('click', function () {
        var code = pre.querySelector('code');
        var text = (code || pre).textContent;

        copyText(text).then(function () {
            button.textContent = 'Copied!';
            button.classList.remove('btn-outline-secondary');
            button.classList.add('btn-success');
            setTimeout(function () {
                button.textContent = 'Copy';
                button.classList.remove('btn-success');
                button.classList.add('btn-outline-secondary');
            }, 3000);
        }, function () {
            button.textContent = 'Error';
            setTimeout(function () { button.textContent = 'Copy'; }, 3000);
        });
    });

    container.appendChild(button);
});
