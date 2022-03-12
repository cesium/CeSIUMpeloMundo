/**
 * MIT License
 *
 * Copyright (c) 2016 Joshua Harms
 *
 * Source: https://github.com/nozzlegear/typed-countries
 */
export interface State {
    /**
     * A state or province's 2-letter ISO abbrevation.
     */
    iso: string;
    /**
     * The state or province's full name.
     */
    name: string;
}

export type Region = "Asia" | "Europe" | "Africa" | "Oceania" | "Americas" | "Antarctica";

export interface Country {
    /**
     * The country's 2-letter ISO abbreviation.
     */
    iso: string;
    /**
     * The country's full name.
     */
    name: string;
    /**
     * Whether the country has postal or ZIP codes.
     */
    hasPostalCodes: boolean;
    /**
     * The country's region or continent. Values can be "Asia", "Europe", "Africa", "Oceania", "Americas" or "Antarctica".
     */
    region: Region;
    /**
     * The country's states or provinces. Note: most countries do not have any states or provinces.
     */
    states: State[];
    /**
     * A regex to check if a given ZIP or postal code is a match for the country.
     */
    zipRegex: string | number;
}

export const countries: Country[] = [
    {
        "region": "Asia",
        "iso": "AF",
        "name": "Afghanistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AX",
        "name": "Åland Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "AL",
        "name": "Albania",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "DZ",
        "name": "Algeria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "AS",
        "name": "American Samoa",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "AD",
        "name": "Andorra",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:AD)*(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "AO",
        "name": "Angola",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "AI",
        "name": "Anguilla",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(AI-2640)$"
    },
    {
        "region": "Antarctica",
        "iso": "AQ",
        "name": "Antarctica",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(7151)$"
    },
    {
        "region": "Americas",
        "iso": "AG",
        "name": "Antigua and Barbuda",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "AR",
        "name": "Argentina",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]\\d{4}[A-Z]{3})|([A-Z]\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "AM",
        "name": "Armenia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "AW",
        "name": "Aruba",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(0000 AW)$"
    },
    {
        "region": "Oceania",
        "iso": "AU",
        "name": "Australia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AT",
        "name": "Austria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "AZ",
        "name": "Azerbaijan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(AZ) (\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BS",
        "name": "Bahamas",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "BH",
        "name": "Bahrain",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3}\\d?)$"
    },
    {
        "region": "Asia",
        "iso": "BD",
        "name": "Bangladesh",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BB",
        "name": "Barbados",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:BB)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "BY",
        "name": "Belarus",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Europe",
        "iso": "BE",
        "name": "Belgium",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "BZ",
        "name": "Belize",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "BJ",
        "name": "Benin",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BM",
        "name": "Bermuda",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]{2} \\d{2})$"
    },
    {
        "region": "Asia",
        "iso": "BT",
        "name": "Bhutan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "BO",
        "name": "Bolivia, Plurinational State of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BQ",
        "name": "Bonaire, Sint Eustatius and Saba",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 BQ)$"
    },
    {
        "region": "Europe",
        "iso": "BA",
        "name": "Bosnia and Herzegovina",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "BW",
        "name": "Botswana",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Antarctica",
        "iso": "BV",
        "name": "Bouvet Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BR",
        "name": "Brazil",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[0-9]{5}-[0-9]{3}$"
    },
    {
        "region": "Africa",
        "iso": "IO",
        "name": "British Indian Ocean Territory",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(BB9D 1ZZ)$"
    },
    {
        "region": "Asia",
        "iso": "BN",
        "name": "Brunei Darussalam",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]{2}\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "BG",
        "name": "Bulgaria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "BF",
        "name": "Burkina Faso",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "BI",
        "name": "Burundi",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KH",
        "name": "Cambodia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "CM",
        "name": "Cameroon",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "CA",
        "name": "Canada",
        "hasPostalCodes": true,
        "states": [
            {
                "iso": "AB",
                "name": "Alberta"
            },
            {
                "iso": "BC",
                "name": "British Columbia"
            },
            {
                "iso": "MB",
                "name": "Manitoba"
            },
            {
                "iso": "NB",
                "name": "New Brunswick"
            },
            {
                "iso": "NL",
                "name": "Newfoundland and Labrador"
            },
            {
                "iso": "NS",
                "name": "Nova Scotia"
            },
            {
                "iso": "NT",
                "name": "Northwest Territories"
            },
            {
                "iso": "NU",
                "name": "Nunavut"
            },
            {
                "iso": "ON",
                "name": "Ontario"
            },
            {
                "iso": "PE",
                "name": "Prince Edward Island"
            },
            {
                "iso": "QC",
                "name": "Quebec"
            },
            {
                "iso": "SK",
                "name": "Saskatchewan"
            },
            {
                "iso": "YT",
                "name": "Yukon"
            }
        ],
        "zipRegex": "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] +?[0-9][A-Z][0-9]$"
    },
    {
        "region": "Africa",
        "iso": "CV",
        "name": "Cape Verde",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "KY",
        "name": "Cayman Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[K][Y][0-9]{1}[-]([0-9]){4}$"
    },
    {
        "region": "Africa",
        "iso": "CF",
        "name": "Central African Republic",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "TD",
        "name": "Chad",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "CL",
        "name": "Chile",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{7})$"
    },
    {
        "region": "Asia",
        "iso": "CN",
        "name": "China",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Oceania",
        "iso": "CX",
        "name": "Christmas Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(6978)$"
    },
    {
        "region": "Oceania",
        "iso": "CC",
        "name": "Cocos (Keeling) Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(6799 W3)$"
    },
    {
        "region": "Americas",
        "iso": "CO",
        "name": "Colombia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "KM",
        "name": "Comoros",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "CG",
        "name": "Congo",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "CD",
        "name": "Congo, the Democratic Republic of the",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "CK",
        "name": "Cook Islands",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "CR",
        "name": "Costa Rica",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "CI",
        "name": "Côte d'Ivoire",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "HR",
        "name": "Croatia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:HR)*(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "CU",
        "name": "Cuba",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:CP)*(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "CW",
        "name": "Curaçao",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 CW)$"
    },
    {
        "region": "Europe",
        "iso": "CY",
        "name": "Cyprus",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "CZ",
        "name": "Czech Republic",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[0-9]{3} [0-9]{2}$"
    },
    {
        "region": "Europe",
        "iso": "DK",
        "name": "Denmark",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "DJ",
        "name": "Djibouti",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "DM",
        "name": "Dominica",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "DO",
        "name": "Dominican Republic",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "EC",
        "name": "Ecuador",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "EG",
        "name": "Egypt",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "SV",
        "name": "El Salvador",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(01101)$"
    },
    {
        "region": "Africa",
        "iso": "GQ",
        "name": "Equatorial Guinea",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "ER",
        "name": "Eritrea",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "EE",
        "name": "Estonia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "ET",
        "name": "Ethiopia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "FK",
        "name": "Falkland Islands (Malvinas)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(FIQQ 1ZZ)$"
    },
    {
        "region": "Europe",
        "iso": "FO",
        "name": "Faroe Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:FO)*(\\d{3})$"
    },
    {
        "region": "Oceania",
        "iso": "FJ",
        "name": "Fiji",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "FI",
        "name": "Finland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:FI)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "FR",
        "name": "France",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "GF",
        "name": "French Guiana",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((973)\\d{2})$"
    },
    {
        "region": "Oceania",
        "iso": "PF",
        "name": "French Polynesia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((987)\\d{2})$"
    },
    {
        "region": "Antarctica",
        "iso": "TF",
        "name": "French Southern Territories",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^((984)\\d{2})$"
    },
    {
        "region": "Africa",
        "iso": "GA",
        "name": "Gabon",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "GM",
        "name": "Gambia",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "GE",
        "name": "Georgia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "DE",
        "name": "Germany",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "GH",
        "name": "Ghana",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "GI",
        "name": "Gibraltar",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(GX11 1AA)$"
    },
    {
        "region": "Europe",
        "iso": "GR",
        "name": "Greece",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3}) \\d{2}$"
    },
    {
        "region": "Americas",
        "iso": "GL",
        "name": "Greenland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "GD",
        "name": "Grenada",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "GP",
        "name": "Guadeloupe",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((971)[0-9][0-0])$"
    },
    {
        "region": "Oceania",
        "iso": "GU",
        "name": "Guam",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((969)[1-3][0-2])$"
    },
    {
        "region": "Americas",
        "iso": "GT",
        "name": "Guatemala",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "GG",
        "name": "Guernsey",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "((GY)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
    },
    {
        "region": "Africa",
        "iso": "GN",
        "name": "Guinea",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "GW",
        "name": "Guinea-Bissau",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "GY",
        "name": "Guyana",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "HT",
        "name": "Haiti",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:HT)*(\\d{4})$"
    },
    {
        "region": "Antarctica",
        "iso": "HM",
        "name": "Heard Island and McDonald Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(7151)$"
    },
    {
        "region": "Europe",
        "iso": "VA",
        "name": "Holy See (Vatican City State)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": -120
    },
    {
        "region": "Americas",
        "iso": "HN",
        "name": "Honduras",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "HK",
        "name": "Hong Kong",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(999077)$"
    },
    {
        "region": "Europe",
        "iso": "HU",
        "name": "Hungary",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "IS",
        "name": "Iceland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "IN",
        "name": "India",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Asia",
        "iso": "ID",
        "name": "Indonesia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "IR",
        "name": "Iran, Islamic Republic of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^\\d{5}([\\-]\\d{5})?$"
    },
    {
        "region": "Asia",
        "iso": "IQ",
        "name": "Iraq",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "IE",
        "name": "Ireland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "IM",
        "name": "Isle of Man",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "((IM)([0-9][0-9A-HJKPS-UW]?|[A-HK-Y][0-9][0-9ABEHMNPRV-Y]?) [0-9][ABD-HJLNP-UW-Z]{2})"
    },
    {
        "region": "Asia",
        "iso": "IL",
        "name": "Israel",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "IT",
        "name": "Italy",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "JM",
        "name": "Jamaica",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^((JM)[A-Z]{3,3}\\d{2,2})$"
    },
    {
        "region": "Asia",
        "iso": "JP",
        "name": "Japan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3}-\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "JE",
        "name": "Jersey",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "(JE)([0-9]\\d{1})"
    },
    {
        "region": "Asia",
        "iso": "JO",
        "name": "Jordan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "KZ",
        "name": "Kazakhstan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "KE",
        "name": "Kenya",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "KI",
        "name": "Kiribati",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KP",
        "name": "Korea, Democratic People's Republic of",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "KR",
        "name": "Korea, Republic of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3}[-]\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "KW",
        "name": "Kuwait",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "KG",
        "name": "Kyrgyzstan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Asia",
        "iso": "LA",
        "name": "Lao People's Democratic Republic",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "LV",
        "name": "Latvia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[L]{1}[V]{1}[-]([0-9]){4}$"
    },
    {
        "region": "Asia",
        "iso": "LB",
        "name": "Lebanon",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4}(\\d{4})?)$"
    },
    {
        "region": "Africa",
        "iso": "LS",
        "name": "Lesotho",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "LR",
        "name": "Liberia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "LY",
        "name": "Libya",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "LI",
        "name": "Liechtenstein",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "LT",
        "name": "Lithuania",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:LT)*(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "LU",
        "name": "Luxembourg",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "MO",
        "name": "Macao",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "MK",
        "name": "Macedonia, the Former Yugoslav Republic of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "MG",
        "name": "Madagascar",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "MW",
        "name": "Malawi",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "MY",
        "name": "Malaysia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "MV",
        "name": "Maldives",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "ML",
        "name": "Mali",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "MT",
        "name": "Malta",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[A-Z]{3} [0-9]{4}$"
    },
    {
        "region": "Oceania",
        "iso": "MH",
        "name": "Marshall Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^((969)[6-7][0-9])$"
    },
    {
        "region": "Americas",
        "iso": "MQ",
        "name": "Martinique",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "MR",
        "name": "Mauritania",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "MU",
        "name": "Mauritius",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^([0-9A-Z]\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "YT",
        "name": "Mayotte",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "MX",
        "name": "Mexico",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "FM",
        "name": "Micronesia, Federated States of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "MD",
        "name": "Moldova, Republic of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(?:MD)*(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "MC",
        "name": "Monaco",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "MN",
        "name": "Mongolia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "ME",
        "name": "Montenegro",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "MS",
        "name": "Montserrat",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "MA",
        "name": "Morocco",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "MZ",
        "name": "Mozambique",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "MM",
        "name": "Myanmar",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "NA",
        "name": "Namibia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "NR",
        "name": "Nauru",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "NP",
        "name": "Nepal",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "NL",
        "name": "Netherlands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "[0-9]{4} [A-Z]{2}"
    },
    {
        "region": "Oceania",
        "iso": "NC",
        "name": "New Caledonia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "NZ",
        "name": "New Zealand",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "NI",
        "name": "Nicaragua",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "NE",
        "name": "Niger",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "NG",
        "name": "Nigeria",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Oceania",
        "iso": "NU",
        "name": "Niue",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "NF",
        "name": "Norfolk Island",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(2899)$"
    },
    {
        "region": "Oceania",
        "iso": "MP",
        "name": "Northern Mariana Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "NO",
        "name": "Norway",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "OM",
        "name": "Oman",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "PK",
        "name": "Pakistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "PW",
        "name": "Palau",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(96940)$"
    },
    {
        "region": "Asia",
        "iso": "PS",
        "name": "Palestine, State of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "PA",
        "name": "Panama",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "PG",
        "name": "Papua New Guinea",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Americas",
        "iso": "PY",
        "name": "Paraguay",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "PE",
        "name": "Peru",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "PH",
        "name": "Philippines",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Oceania",
        "iso": "PN",
        "name": "Pitcairn",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(PCR9 1ZZ)$"
    },
    {
        "region": "Europe",
        "iso": "PL",
        "name": "Poland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[0-9]{2}[-]([0-9]){3}$"
    },
    {
        "region": "Europe",
        "iso": "PT",
        "name": "Portugal",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^\\d{4}((-|\\s)?\\d{3})?$"
    },
    {
        "region": "Americas",
        "iso": "PR",
        "name": "Puerto Rico",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^\\d{5}((-|\\s)?\\d{4})?$"
    },
    {
        "region": "Asia",
        "iso": "QA",
        "name": "Qatar",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "RE",
        "name": "Réunion",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "[9]{1}[7|8][4|7|8]\\d{2}"
    },
    {
        "region": "Europe",
        "iso": "RO",
        "name": "Romania",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Europe",
        "iso": "RU",
        "name": "Russian Federation",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Africa",
        "iso": "RW",
        "name": "Rwanda",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "BL",
        "name": "Saint Barthélemy",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SH",
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^[A-Z]{4} (1ZZ)$"
    },
    {
        "region": "Americas",
        "iso": "KN",
        "name": "Saint Kitts and Nevis",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "LC",
        "name": "Saint Lucia",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "MF",
        "name": "Saint Martin (French part)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "PM",
        "name": "Saint Pierre and Miquelon",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "VC",
        "name": "Saint Vincent and the Grenadines",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "(VC)(\\d{4})"
    },
    {
        "region": "Oceania",
        "iso": "WS",
        "name": "Samoa",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "SM",
        "name": "San Marino",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(4789\\d)$"
    },
    {
        "region": "Africa",
        "iso": "ST",
        "name": "Sao Tome and Principe",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "SA",
        "name": "Saudi Arabia",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SN",
        "name": "Senegal",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "RS",
        "name": "Serbia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SC",
        "name": "Seychelles",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "SL",
        "name": "Sierra Leone",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "SG",
        "name": "Singapore",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Americas",
        "iso": "SX",
        "name": "Sint Maarten (Dutch part)",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(0000 AA)$"
    },
    {
        "region": "Europe",
        "iso": "SK",
        "name": "Slovakia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3} \\d{2})$"
    },
    {
        "region": "Europe",
        "iso": "SI",
        "name": "Slovenia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Oceania",
        "iso": "SB",
        "name": "Solomon Islands",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "SO",
        "name": "Somalia",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "ZA",
        "name": "South Africa",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Americas",
        "iso": "GS",
        "name": "South Georgia and the South Sandwich Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(SIQQ 1ZZ)$"
    },
    {
        "region": "Africa",
        "iso": "SS",
        "name": "South Sudan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Europe",
        "iso": "ES",
        "name": "Spain",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "LK",
        "name": "Sri Lanka",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "SD",
        "name": "Sudan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Americas",
        "iso": "SR",
        "name": "Suriname",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "SJ",
        "name": "Svalbard and Jan Mayen",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Africa",
        "iso": "SZ",
        "name": "Swaziland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^([A-Z]\\d{3})$"
    },
    {
        "region": "Europe",
        "iso": "SE",
        "name": "Sweden",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3} \\d{2})$"
    },
    {
        "region": "Europe",
        "iso": "CH",
        "name": "Switzerland",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "SY",
        "name": "Syrian Arab Republic",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "TW",
        "name": "Taiwan, Province of China",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3} \\d{2})|(\\d{3})$"
    },
    {
        "region": "Asia",
        "iso": "TJ",
        "name": "Tajikistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{3})$"
    },
    {
        "region": "Africa",
        "iso": "TZ",
        "name": "Tanzania, United Republic of",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Asia",
        "iso": "TH",
        "name": "Thailand",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "TL",
        "name": "Timor-Leste",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "TG",
        "name": "Togo",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "TK",
        "name": "Tokelau",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Oceania",
        "iso": "TO",
        "name": "Tonga",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "TT",
        "name": "Trinidad and Tobago",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "TN",
        "name": "Tunisia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "TR",
        "name": "Turkey",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "TM",
        "name": "Turkmenistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Americas",
        "iso": "TC",
        "name": "Turks and Caicos Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(TKCA 1ZZ)$"
    },
    {
        "region": "Oceania",
        "iso": "TV",
        "name": "Tuvalu",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "UG",
        "name": "Uganda",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "UA",
        "name": "Ukraine",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "AE",
        "name": "United Arab Emirates",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Europe",
        "iso": "GB",
        "name": "United Kingdom",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(((([A-PR-UWYZ][0-9][0-9A-HJKS-UW]?)|([A-PR-UWYZ][A-HK-Y][0-9][0-9ABEHMNPRV-Y]?))\\s{0,2}[0-9]([ABD-HJLNP-UW-Z]{2}))|(GIR\\s{0,2}0AA))$"
    },
    {
        "region": "Americas",
        "iso": "US",
        "name": "United States",
        "hasPostalCodes": true,
        "states": [
            {
                "iso": "AL",
                "name": "Alabama"
            },
            {
                "iso": "AK",
                "name": "Alaska"
            },
            {
                "iso": "AZ",
                "name": "Arizona"
            },
            {
                "iso": "AR",
                "name": "Arkansas"
            },
            {
                "iso": "CA",
                "name": "California"
            },
            {
                "iso": "CO",
                "name": "Colorado"
            },
            {
                "iso": "CT",
                "name": "Connecticut"
            },
            {
                "iso": "DE",
                "name": "Delaware"
            },
            {
                "iso": "DC",
                "name": "District Of Columbia"
            },
            {
                "iso": "FL",
                "name": "Florida"
            },
            {
                "iso": "GA",
                "name": "Georgia"
            },
            {
                "iso": "HI",
                "name": "Hawaii"
            },
            {
                "iso": "ID",
                "name": "Idaho"
            },
            {
                "iso": "IL",
                "name": "Illinois"
            },
            {
                "iso": "IN",
                "name": "Indiana"
            },
            {
                "iso": "IA",
                "name": "Iowa"
            },
            {
                "iso": "KS",
                "name": "Kansas"
            },
            {
                "iso": "KY",
                "name": "Kentucky"
            },
            {
                "iso": "LA",
                "name": "Louisiana"
            },
            {
                "iso": "ME",
                "name": "Maine"
            },
            {
                "iso": "MD",
                "name": "Maryland"
            },
            {
                "iso": "MA",
                "name": "Massachusetts"
            },
            {
                "iso": "MI",
                "name": "Michigan"
            },
            {
                "iso": "MN",
                "name": "Minnesota"
            },
            {
                "iso": "MS",
                "name": "Mississippi"
            },
            {
                "iso": "MO",
                "name": "Missouri"
            },
            {
                "iso": "MT",
                "name": "Montana"
            },
            {
                "iso": "NE",
                "name": "Nebraska"
            },
            {
                "iso": "NV",
                "name": "Nevada"
            },
            {
                "iso": "NH",
                "name": "New Hampshire"
            },
            {
                "iso": "NJ",
                "name": "New Jersey"
            },
            {
                "iso": "NM",
                "name": "New Mexico"
            },
            {
                "iso": "NY",
                "name": "New York"
            },
            {
                "iso": "NC",
                "name": "North Carolina"
            },
            {
                "iso": "ND",
                "name": "North Dakota"
            },
            {
                "iso": "OH",
                "name": "Ohio"
            },
            {
                "iso": "OK",
                "name": "Oklahoma"
            },
            {
                "iso": "OR",
                "name": "Oregon"
            },
            {
                "iso": "PA",
                "name": "Pennsylvania"
            },
            {
                "iso": "RI",
                "name": "Rhode Island"
            },
            {
                "iso": "SC",
                "name": "South Carolina"
            },
            {
                "iso": "SD",
                "name": "South Dakota"
            },
            {
                "iso": "TN",
                "name": "Tennessee"
            },
            {
                "iso": "TX",
                "name": "Texas"
            },
            {
                "iso": "UT",
                "name": "Utah"
            },
            {
                "iso": "VT",
                "name": "Vermont"
            },
            {
                "iso": "VA",
                "name": "Virginia"
            },
            {
                "iso": "WA",
                "name": "Washington"
            },
            {
                "iso": "WV",
                "name": "West Virginia"
            },
            {
                "iso": "WI",
                "name": "Wisconsin"
            },
            {
                "iso": "WY",
                "name": "Wyoming"
            }
        ],
        "zipRegex": "^\\d{5}([\\-]\\d{4})?$"
    },
    {
        "region": "Americas",
        "iso": "UM",
        "name": "United States Minor Outlying Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "UY",
        "name": "Uruguay",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "UZ",
        "name": "Uzbekistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Oceania",
        "iso": "VU",
        "name": "Vanuatu",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Americas",
        "iso": "VE",
        "name": "Venezuela, Bolivarian Republic of",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Asia",
        "iso": "VN",
        "name": "Viet Nam",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{6})$"
    },
    {
        "region": "Americas",
        "iso": "VG",
        "name": "Virgin Islands, British",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(VG11)[0-6][0]$"
    },
    {
        "region": "Americas",
        "iso": "VI",
        "name": "Virgin Islands, U.S.",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Oceania",
        "iso": "WF",
        "name": "Wallis and Futuna",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "EH",
        "name": "Western Sahara",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Asia",
        "iso": "YE",
        "name": "Yemen",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    },
    {
        "region": "Africa",
        "iso": "ZM",
        "name": "Zambia",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    },
    {
        "region": "Africa",
        "iso": "ZW",
        "name": "Zimbabwe",
        "hasPostalCodes": false,
        "states": [],
        "zipRegex": ""
    }
]

export const regions: Region[] = countries.reduce((result, country) => {
    if (result.indexOf(country.region) === -1) {
        result.push(country.region)
    }

    return result;
}, [] as Region[])

export default countries;
