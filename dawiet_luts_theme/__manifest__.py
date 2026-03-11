# -*- coding: utf-8 -*-
{
    'name': 'Dawiet LUTs Theme',
    'description': 'Dark cinematic theme for Dawiet LUTs shop — matches the landing page design.',
    'version': '19.0.1.0.0',
    'category': 'Theme/Creative',
    'author': 'Dawiet LUTs',
    'license': 'LGPL-3',
    'depends': ['website', 'website_sale'],
    'data': [
        'views/layout.xml',
        'views/shop.xml',
        'views/product.xml',
        'views/checkout.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'dawiet_luts_theme/static/src/css/theme.css',
            'dawiet_luts_theme/static/src/js/theme.js',
        ],
    },
    'images': ['static/description/preview.png'],
    'application': False,
    'installable': True,
    'auto_install': False,
}
