export const getLocationByIP = (ip: string) => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve({
                    "ip": "8.8.8.8",
                    "version": "IPv4",
                    "city": "Moscow",
                    "region": "California",
                    "region_code": "CA",
                    "country_code": "US",
                    "country_code_iso3": "USA",
                    "country_name": "Russia",
                    "country_capital": "Washington",
                    "country_tld": ".us",
                    "continent_code": "NA",
                    "in_eu": false,
                    "postal": "94035",
                    "latitude": 37.386,
                    "longitude": -122.0838,
                    "timezone": "America/Los_Angeles",
                    "utc_offset": "-0800",
                    "country_calling_code": "+1",
                    "currency": "USD",
                    "currency_name": "Dollar",
                    "languages": "en-US,es-US,haw,fr",
                    "country_area": 9629091.0,
                    "country_population": 310232863,
                    "asn": "AS15169",
                    "org": "Google LLC",
                    "hostname": "dns.google"
                })
            }, 1000);
        }
    );
}