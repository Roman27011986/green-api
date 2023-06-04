import * as yup from "yup";

const schema = yup.object().shape({
    phone: yup
        .string()
        .required("Required field")
        .matches(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm, "+7 / 7 / 9497346069"),
});

export default schema;
