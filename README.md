canLocalize
===========

A can.js localization helper.

##Setup

The first step to setup canLocalize is to create locales. A locale is nothing but a javascript object called inside the ´locale´ object. This is a valid example of a locale:

    var locale = {};
    locale.en = {
        greeting: 'Hello'
    };
    locale.es = {
        greeting: 'Hola'			
    };

Here we are defining two locales. One for English, "en", and one for Spanish, "es". Now that we have defined our locales all we need is to use them in views. (Currently this works only with EJS views but I'll probably port them over once I get the library to a usable state.)

Here's an example view using the ´t´ helper. Which is directly mapped to the translate function inside the library.

    <script type="text/ejs" id="hi">
        <div><%== t('greeting'); %> Sergio</div>
    </script>

You can access all the functions inside the library, from the view using the i18n object, which is mapped directly to the library.

Also, the default language is grabbed from the head element, so don't forget to set it:

    <head lang="en"></head>

If you don't want to set it in the head for some reason you can also set it directly in the javascript like this:

    i18n.defaults.lang = 'en';

Just make sure to change the value before you start using the language in the view, if you've already loaded views, you should use the ´update´ function, to change the language and update all of the translated words, like so:

    i18n.update('es');

## Usage
Now that we have the view and the locales all set up all we need to do is add the view to the document, like usual:

    $('body').append(can.view('hi'));

This will append the view, like always, with the translation in the current language. Use the ´update ´ function as explained above to change the language. 

## License
Copyright © 2013 Sergio Díaz<seich@martianwabbit.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
