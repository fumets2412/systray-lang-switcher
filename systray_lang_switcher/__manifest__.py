# -*- coding: utf-8 -*-
{
    'name': 'Systray Language Switcher',
    'author': 'Tommy Tran',
    'category': 'Tools',
    'summary': 'A sleek, lightning-fast system tray language switcher for Odoo 20 using Owl 3 architecture.',
    'description': """
Systray Language Switcher
=========================
A modern, lightweight system tray module designed for Odoo 20.

Key Features:
-------------
* **Instant Switching**: Switch system languages directly from the top navigation bar.
* **Native Design**: Built strictly using Odoo 20 Bootstrap 5 components and Iconify (oi) icons.
* **Visual Indicators**: Flag previews and active checkmarks for clear status identification.
* **Seamless Sync**: Instantly updates user preferences with zero friction.
    """,
    'maintainer': 'Tommy Tran',
    'version': '20.0.1.0.0',
    'depends': ['web'],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'systray_lang_switcher/static/src/js/lang_switcher.js',
            'systray_lang_switcher/static/src/xml/lang_switcher.xml',
        ],
    },
    'images': ['static/description/banner.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}