export const Base_Url = `http://localhost:8000`;


export const Api_paths = {
    AUTH: {
        LOGIN: `/api/v1/auth/login`,
        REGISTER: `/api/v1/auth/register`,
        GETUSER: `/api/v1/auth/getuserinfo`
    },
    DASHBOARD: {
        GETDATA: `/api/v1/dashboard/data`
    },
    INCOME: {
        ADD_INCOME: `/api/v1/income/add`,
        GET_ALL_INCOME: `/api/v1/income/getIncome`,
        DELETE_INCOME: (deleteID) => `/api/v1/income/${deleteID}`,
        DOWNLOAD_INCOME_EXCEL: `/api/v1/income/download`,
    },
    EXPANSES: {
        ADD_EXPANSE: `/api/v1/expanse/add`,
        GET_ALL_EXPANSE: `/api/v1/expanse/getExpanses`,
        DELETE_EXPANSE: (deleteID) => `/api/v1/expanse/${deleteID}`,
        DOWNLOAD_EXPANSE_EXCEL: `/api/v1/expanse/download`,
    },
    IMAGE : {
        UPLOAD_IMAGE : `/api/v1/auth/upload-image`
    }
};