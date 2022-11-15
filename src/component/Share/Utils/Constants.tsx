enum UserType {
  User,
  Group,
}

const allUsers: any = [
  { id: 1, type: UserType.User, title: "Nilesh Kr. Pandey", img: "" },
  { id: 2, type: UserType.User, title: "Arlene Mccoy", img: "" },
  { id: 3, type: UserType.User, title: "James Bond", img: "" },
  { id: 11, type: UserType.Group, title: "Product" },
  { id: 12, type: UserType.Group, title: "Engineering" },
];

const access = [
  {
    value: "Full access",
    label: "Full access",
  },
  {
    value: "Can edit",
    label: "Can edit",
  },
  {
    value: "Can comment",
    label: "Can comment",
  },
];
export { allUsers, access };
