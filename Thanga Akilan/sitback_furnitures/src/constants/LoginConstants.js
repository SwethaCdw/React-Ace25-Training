export const LOGIN = {
    HEADING: "SITBACK",
    SUB_HEADING: "FURNITURE",
    FORM: {
        INPUT_1: {
            NAME: "Username",
            TYPE: "text",
            ERROR : {
                INVALID: "Invalid Username"
            }
        },
        INPUT_2:  {
            NAME: "Password",
            TYPE: "password",
            ERROR : {
                INVALID: "Invalid password"
            }
        },
        BUTTON: {
            NAME: "LOGIN",
            TYPE: "submit"
        }
    },
    REGEX: {
        USERNAME: /^[a-z A-Z]+$/ ,
        PASSWORD: /^([a-zA-Z]+)([0-9]+)([!@#$%^&*]+)$/
    },
    NAVIGATE_TO: "/categories/couches"
}


