export default function Validation(data) {
  const errors = {};

  const email_pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  if (data.email === "") {
    errors.email = "email is required";
  } else if (!email_pattern.test(data.email)) {
    errors.email = "email dont match";
  }

  if (data.fName === "") {
    errors.fName = "name";
  }
  //   if (values.lName === "") {
  //     errors.lName = "name";
  //   }
  //   if (values.street === "") {
  //     errors.street = "street";
  //   }
  //   if (values.city === "") {
  //     errors.city = "city";
  //   }
  //   if (values.postcode === "") {
  //     errors.postcode = "postcode";
  //   }

  //   if (values.phone === "") {
  //     errors.phone = "phone";
  //   }

  return errors;
}
