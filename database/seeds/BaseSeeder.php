<?php

use Illuminate\Database\Seeder;

class BaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countries = [
            'be' => 'Belgium',
            'cy' => 'Cyprus',
            'dk' => 'Denmark',
            'est' => 'Estland',
            'fi' => 'Finland',
            'fr' => 'France',
            'gr' => 'Greece',
            'nl' => 'Holland',
            'ie' => 'Ireland',
            'hr' => 'Croatia',
            'it' => 'Italy',
            'lv' => 'Latvia',
            'lt' => 'Lithuania',
            'lu' => 'Luxembourg',
            'mt' => 'Malta',
            'pl' => 'Poland',
            'pt' => 'Portugal',
            'sk' => 'Slovakia',
            'bg' => 'Bulgaria',
            'es' => 'Spain',
            'gb' => 'UK',
            'se' => 'Sweden',
            'cz' => 'Czech Republic',
            'de' => 'Germany',
            'hu' => 'Hungary',
            'at' => 'Austria',
            'si' => 'Slovenia',
            'ro' => 'Romania',
            'no' => 'Norway',
            'tr' => 'Turkey',
            'is' => 'Iceland',
            'mk' => 'Macedonia',
            'li' => 'Liechtenstein'
        ];

        foreach($countries as $key => $value) {
            \App\Country::create([
                'name' => $value,
                'code' => $key
            ]);
        }
    }
}
