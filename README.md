# Infyom Json Schema Generator

[InfyOm Laravel Generator](https://github.com/InfyOmLabs/laravel-generator) is great laravel generator for artisans. Here is my attempt to 
create GUI Schema Generator(json) for InfyOm Laravel Generator.

If you are not familiar with InfyOm Laravel Generator please read documentaton [here](http://labs.infyom.com/laravelgenerator).

> Note: This is not official package from InfyOm.

## How to use
 - First open the tool from [here](https://harish81.github.io/infyom-schema-generator/).
 - Name your schema file in `model name` textbox.
 - Add Rows/Fields.
 - Modify name, dbType, htmlType, validation, options etc.
 - Download/Copy Generated Schema File
 - Place the Schema file under `resources/model_schemas`.
 - Fire `php artisan infyom:scaffold $SCHEMA_FILE` (without extension).
 - `php artisan migrate`
 - voylla!! :clap: Your coffee is ready. :coffee:
 
## Credit
 - React - https://reactjs.org/
 - Tailwind css - https://tailwindcss.com/
 - react-syntax-highlighter - https://github.com/conorhastings/react-syntax-highlighter
 - FeatherIcon - https://feathericons.com/