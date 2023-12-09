interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  status: "ACTIVE" | "INACTIVE";
  role: "ADMIN" | "USER";
  firstName: string;
  lastName: string;
  shelves: Shelf[];
}

interface Shelf {
  id_shelf: string;
  User_id: string;
  title: string;
  creation_time: string;
}

export { User, Shelf };
