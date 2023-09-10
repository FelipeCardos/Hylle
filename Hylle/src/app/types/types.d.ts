declare global{
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
        id: number;
        title: string;
        creationTime: string;
      }
      
      export default User;
      
}