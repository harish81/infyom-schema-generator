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
 - Fire `php artisan infyom:scaffold $MODEL --fieldsFile=$SCHEMA_FILE.json`.
 - `php artisan migrate`
 - voylla!! :clap: Your coffee is ready. :coffee:
 
## Credit
 - [InfyOm Laravel Generator](https://github.com/InfyOmLabs/laravel-generator) - Special Thanks who bring great laravel generator to us.
 - React - https://reactjs.org/
 - Tailwind css - https://tailwindcss.com/
 - react-syntax-highlighter - https://github.com/conorhastings/react-syntax-highlighter
 - FeatherIcon - https://feathericons.com/
 - React Feather Icons - https://github.com/feathericons/react-feather
 - Logo Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)
