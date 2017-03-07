<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$language_codes = array(
    'en' => 'English' ,
    'aa' => 'Afar' ,
    'ab' => 'Abkhazian' ,
    'af' => 'Afrikaans' ,
    'am' => 'Amharic' ,
    'ar' => 'Arabic' ,
    'as' => 'Assamese' ,
    'ay' => 'Aymara' ,
    'az' => 'Azerbaijani' ,
    'ba' => 'Bashkir' ,
    'be' => 'Byelorussian' ,
    'bg' => 'Bulgarian' ,
    'bh' => 'Bihari' ,
    'bi' => 'Bislama' ,
    'bn' => 'Bengali/Bangla' ,
    'bo' => 'Tibetan' ,
    'br' => 'Breton' ,
    'ca' => 'Catalan' ,
    'co' => 'Corsican' ,
    'cs' => 'Czech' ,
    'cy' => 'Welsh' ,
    'da' => 'Danish' ,
    'de' => 'German' ,
    'dz' => 'Bhutani' ,
    'el' => 'Greek' ,
    'eo' => 'Esperanto' ,
    'es' => 'Spanish' ,
    'et' => 'Estonian' ,
    'eu' => 'Basque' ,
    'fa' => 'Persian' ,
    'fi' => 'Finnish' ,
    'fj' => 'Fiji' ,
    'fo' => 'Faeroese' ,
    'fr' => 'French' ,
    'fy' => 'Frisian' ,
    'ga' => 'Irish' ,
    'gd' => 'Scots/Gaelic' ,
    'gl' => 'Galician' ,
    'gn' => 'Guarani' ,
    'gu' => 'Gujarati' ,
    'ha' => 'Hausa' ,
    'hi' => 'Hindi' ,
    'hr' => 'Croatian' ,
    'hu' => 'Hungarian' ,
    'hy' => 'Armenian' ,
    'ia' => 'Interlingua' ,
    'ie' => 'Interlingue' ,
    'ik' => 'Inupiak' ,
    'in' => 'Indonesian' ,
    'is' => 'Icelandic' ,
    'it' => 'Italian' ,
    'iw' => 'Hebrew' ,
    'ja' => 'Japanese' ,
    'ji' => 'Yiddish' ,
    'jw' => 'Javanese' ,
    'ka' => 'Georgian' ,
    'kk' => 'Kazakh' ,
    'kl' => 'Greenlandic' ,
    'km' => 'Cambodian' ,
    'kn' => 'Kannada' ,
    'ko' => 'Korean' ,
    'ks' => 'Kashmiri' ,
    'ku' => 'Kurdish' ,
    'ky' => 'Kirghiz' ,
    'la' => 'Latin' ,
    'ln' => 'Lingala' ,
    'lo' => 'Laothian' ,
    'lt' => 'Lithuanian' ,
    'lv' => 'Latvian/Lettish' ,
    'mg' => 'Malagasy' ,
    'mi' => 'Maori' ,
    'mk' => 'Macedonian' ,
    'ml' => 'Malayalam' ,
    'mn' => 'Mongolian' ,
    'mh' => 'English',
    'mo' => 'Moldavian' ,
    'mr' => 'Marathi' ,
    'ms' => 'Malay' ,
    'mt' => 'Maltese' ,
    'my' => 'Burmese' ,
    'na' => 'Nauru' ,
    'ne' => 'Nepali' ,
    'nl' => 'Dutch' ,
    'no' => 'Norwegian' ,
    'oc' => 'Occitan' ,
    'om' => '(Afan)/Oromoor/Oriya' ,
    'pa' => 'Punjabi' ,
    'pl' => 'Polish' ,
    'ps' => 'Pashto/Pushto' ,
    'pt' => 'Portuguese' ,
    'qu' => 'Quechua' ,
    'rm' => 'Rhaeto-Romance' ,
    'rn' => 'Kirundi' ,
    'ro' => 'Romanian' ,
    'ru' => 'Russian' ,
    'rw' => 'Kinyarwanda' ,
    'sa' => 'Sanskrit' ,
    'se' => 'Swedish',
    'sd' => 'Sindhi' ,
    'sg' => 'Sangro' ,
    'sh' => 'Serbo-Croatian' ,
    'si' => 'Singhalese' ,
    'sk' => 'Slovak' ,
    'sl' => 'Slovenian' ,
    'sm' => 'Samoan' ,
    'sn' => 'Shona' ,
    'so' => 'Somali' ,
    'sq' => 'Albanian' ,
    'sr' => 'Serbian' ,
    'ss' => 'Siswati' ,
    'st' => 'Sesotho' ,
    'su' => 'Sundanese' ,
    'sv' => 'Swedish' ,
    'sw' => 'Swahili' ,
    'ta' => 'Tamil' ,
    'te' => 'Tegulu' ,
    'tg' => 'Tajik' ,
    'th' => 'Thai' ,
    'ti' => 'Tigrinya' ,
    'tk' => 'Turkmen' ,
    'tl' => 'Tagalog' ,
    'tn' => 'Setswana' ,
    'to' => 'Tonga' ,
    'tr' => 'Turkish' ,
    'ts' => 'Tsonga' ,
    'tt' => 'Tatar' ,
    'tw' => 'Twi' ,
    'uk' => 'Ukrainian' ,
    'ur' => 'Urdu' ,
    'uz' => 'Uzbek' ,
    'vi' => 'Vietnamese' ,
    'vo' => 'Volapuk' ,
    'wo' => 'Wolof' ,
    'xh' => 'Xhosa' ,
    'yo' => 'Yoruba' ,
    'zh' => 'Chinese' ,
    'zu' => 'Zulu' ,
);

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->defineAs(App\User::class, 'user_male', function (Faker\Generator $faker) use ($language_codes) {
    static $password;

    $number = $faker->numberBetween(1, 99);
    $avatar = '001m.jpg';
    if ($number < 10) {
        $avatar = '00'.$number.'m.jpg';
    } elseif ($number >= 10 && $number < 100) {
        $avatar = '0'.$number.'m.jpg';
    }

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'type' => \App\Enumerators\UserType::PROFESSIONAL,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'picture' => '/images/'.$avatar,
        'country' => $faker->country,
        'languages' => $language_codes[$faker->languageCode]
    ];
});

$factory->defineAs(App\User::class, 'user_female', function (Faker\Generator $faker) use ($language_codes) {
    static $password;

    $number = $faker->numberBetween(1, 99);
    $avatar = '001f.jpg';
    if ($number < 10) {
        $avatar = '00'.$number.'f.jpg';
    } elseif ($number >= 10 && $number < 100) {
        $avatar = '0'.$number.'f.jpg';
    }

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'type' => \App\Enumerators\UserType::PROFESSIONAL,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'picture' => '/images/'.$avatar,
        'country' => $faker->country,
        'languages' => $language_codes[$faker->languageCode]
    ];
});

$factory->defineAs(App\User::class, 'company', function (Faker\Generator $faker) use ($language_codes) {
    static $password;

    $number = $faker->numberBetween(1, 99);
    $logo = '001c.png';
    if ($number < 10) {
        $avatar = '00'.$number.'c.png';
    } elseif ($number >= 10 && $number < 100) {
        $avatar = '0'.$number.'c.png';
    }

    return [
        'name' => $faker->company,
        'email' => $faker->unique()->safeEmail,
        'type' => \App\Enumerators\UserType::COMPANY,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'picture' => '/images/'.$logo,
        'location' => $faker->address,
    ];
});
