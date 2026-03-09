/**
 * Fetches Energy Community data for a specific profile and date range.
 * Currently uses mock data based on the structure defined in data_types.json.
 * 
 * @param {string} ec_id - The Energy Community ID
 * @param {string} date_from - The start date (YYYY-MM-DD)
 * @param {string} date_to - The end date (YYYY-MM-DD)
 * @returns {Promise<Array>} The EC profile data
 */
export async function ec_data_get(ec_id, date_from, date_to) {
    console.log(`[API Mock] Fetching data for EC: ${ec_id}, From: ${date_from}, To: ${date_to}`);

    const local_ec_id = ec_id || 'test-ec-123';
    const local_date_from = date_from || '01.02.2026';
    const local_date_to = date_to || '01.02.2026';

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return mock data structured according to data_types.json
    // For demonstration, we'll return a single record wrapping the arrays
    return {
        s_ec: {
            ec_id: local_ec_id,
            date_start: "01.01.2026",
            date_end: "",
            ec_type: "GEA",
            ec_dis_model: "D",
            date_from: local_date_from,
            date_to: local_date_to,
            date_created: "02.02.2026",
            g_values: ["4.5, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 3.5, 3.5, 3.5, 3.25, 3.25, 3.25, 3.25, 3, 3, 3, 3, 6.25, 6.25, 6.25, 6.25, 9.5, 9.5, 9.5, 9.5, 13, 13, 13, 13, 16.25, 16.25, 16.25, 16.25, 17.5, 17.5, 17.5, 17.5, 18.75, 18.75, 18.75, 18.75, 20, 20, 20, 20, 21.25, 21.25, 21.25, 21.25, 22, 22, 22, 22, 22.5, 22.5, 22.5, 22.5, 23.25, 23.25, 23.25, 23.25, 23.75, 23.75, 23.75, 23.75, 20.5, 20.5, 20.5, 20.5, 17.5, 17.5, 17.5, 17.5, 14.5, 14.5, 14.5, 14.5, 11.25, 11.25, 11.25, 11.25, 8.75, 8.75, 8.75, 8.75, 6.25, 6.25, 6.25, 6.25, 3.75, 3.75, 3.75, 3.75"],
            c_values: ["4.5, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 3.5, 3.5, 3.5, 3.25, 3.25, 3.25, 3.25, 3, 3, 3, 3, 6.25, 6.25, 6.25, 6.25, 9.5, 9.5, 9.5, 9.5, 13, 13, 13, 13, 16.25, 16.25, 16.25, 16.25, 17.5, 17.5, 17.5, 17.5, 18.75, 18.75, 18.75, 18.75, 20, 20, 20, 20, 21.25, 21.25, 21.25, 21.25, 22, 22, 22, 22, 22.5, 22.5, 22.5, 22.5, 23.25, 23.25, 23.25, 23.25, 23.75, 23.75, 23.75, 23.75, 20.5, 20.5, 20.5, 20.5, 17.5, 17.5, 17.5, 17.5, 14.5, 14.5, 14.5, 14.5, 11.25, 11.25, 11.25, 11.25, 8.75, 8.75, 8.75, 8.75, 6.25, 6.25, 6.25, 6.25, 3.75, 3.75, 3.75, 3.75"]
        },
        t_pod: [
            {
                pod: "AT0000000000000000000000000000123",
                pod_type: "G",
                date_from: "2026-01-01",
                date_to: "",
                ec_id: local_ec_id,
                part_perc: 100.00,
                ec_factor: 100.00
            },
            {
                pod: "AT0000000000000000000000000000789",
                pod_type: "C",
                date_from: "2026-01-01",
                date_to: "",
                ec_id: local_ec_id,
                part_perc: 100.00,
                ec_factor: 100.00
            }
        ],
        t_pod_profile: [
            {
                pod: "AT0000000000000000000000000000123",
                ec_id: local_ec_id,
                pod_type: "G",
                formula_type: "E001",
                datefrom: "2026-02-01",
                datefrom_offset: 0,
                timefrom: "00:00:00",
                dateto: "2026-02-01",
                dateto_offset: 0,
                timeto: "23:59:59",
                values: ["4.5, 4.5, 4.5, 4.5, 4, 4, 4, 4, 3.5, 3.5, 3.5, 3.5, 3.25, 3.25, 3.25, 3.25, 3, 3, 3, 3, 6.25, 6.25, 6.25, 6.25, 9.5, 9.5, 9.5, 9.5, 13, 13, 13, 13, 16.25, 16.25, 16.25, 16.25, 17.5, 17.5, 17.5, 17.5, 18.75, 18.75, 18.75, 18.75, 20, 20, 20, 20, 21.25, 21.25, 21.25, 21.25, 22, 22, 22, 22, 22.5, 22.5, 22.5, 22.5, 23.25, 23.25, 23.25, 23.25, 23.75, 23.75, 23.75, 23.75, 20.5, 20.5, 20.5, 20.5, 17.5, 17.5, 17.5, 17.5, 14.5, 14.5, 14.5, 14.5, 11.25, 11.25, 11.25, 11.25, 8.75, 8.75, 8.75, 8.75, 6.25, 6.25, 6.25, 6.25, 3.75, 3.75, 3.75, 3.75"]
            },
            {
                pod: "AT0000000000000000000000000000789",
                ec_id: local_ec_id,
                pod_type: "C",
                formula_type: "E001",
                datefrom: date_from || "2026-03-01",
                datefrom_offset: 0,
                timefrom: "00:00:00",
                dateto: date_to || "2026-03-08",
                dateto_offset: 0,
                timeto: "23:59:59",
                values: ["8.75, 8.75, 8.75, 8.75, 8, 8, 8, 8, 7.5, 7.5, 7.5, 7.5, 7, 7, 7, 7, 6.25, 6.25, 6.25, 6.25, 6.75, 6.75, 6.75, 6.75, 7.5, 7.5, 7.5, 7.5, 8, 8, 8, 8, 7.5, 7.5, 7.5, 7.5, 7.25, 7.25, 7.25, 7.25, 7, 7, 7, 7, 6.75, 6.75, 6.75, 6.75, 7, 7, 7, 7, 7.25, 7.25, 7.25, 7.25, 7.5, 7.5, 7.5, 7.5, 7.75, 7.75, 7.75, 7.75, 8, 8, 8, 8, 8.5, 8.5, 8.5, 8.5, 9, 9, 9, 9, 9.5, 9.5, 9.5, 9.5, 10, 10, 10, 10, 9.5, 9.5, 9.5, 9.5, 8.75, 8.75, 8.75, 8.75, 7.5, 7.5, 7.5, 7.5"]
            }
        ]
    }
}   