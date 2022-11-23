interface UpdateProps {
    id: number;
    profile_image: string;
    comment: string;
    info_url: string;
    created_by: string;
    created_on: string;
}

interface LaunchesProps {
    id:	string;
    url: string;
    slug: string;
    name: string;
    flightclub_url: string;
    r_spacex_api_id: string;
    status:	{
        id:	number;
        name: string;
        abbrev: string;
        description: string;
    }
    last_updated: string;
    updates: UpdateProps[];
    net: string;
    window_end: string;
    window_start: string;
    probability: string;
    holdreason: string;
    failreason: string;
    hashtag: string;
    rocket: {
        id: number,
        configuration: {
            id: number;
            url: string;
            name: string;
            family: string;
            full_name: string;
            variant: string;
        }
    };
    mission: {
        id: number
        name: string;
        description: string;
        launch_designator: string;
        type: string;
        orbit: {
            id: number;
            name: string;
            abbrev: string;
        }
    };
    webcast_live: boolean
    image: string;
    infographic: string;
    program: string[],
    orbital_launch_attempt_count: number;
    location_launch_attempt_count: number;
    pad_launch_attempt_count: number;
    agency_launch_attempt_count: number;
    orbital_launch_attempt_count_year: number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year: number;
    agency_launch_attempt_count_year: number;
}

interface LaunchesResult {
    count: string;
    next: string;
    previous: string;
    results: LaunchesProps[];
}

export type { LaunchesProps, LaunchesResult };