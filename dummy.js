import { faker } from "@faker-js/faker";
// import { faker } from '@faker-js/faker/locale/de';
// import json from "./db.json" assert { type: "json" };
import { writeFile } from "fs/promises";

export const courses = [];

export function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    "short description": faker.commerce.productDescription(),
    instructon: faker.internet.userName(),
  };
}
Array.from({ length: 22 }).forEach(() => {
  courses.push(createRandomUser());
});
let obj = {
  courses,
};
const json = JSON.parse(
  // await readFile(new URL("./some-file.json", import.meta.url))
  await writeFile("./db.json", JSON.stringify(obj))
);

// json.writeFile("db.json", JSON.stringify(USERS), "utf8");
JSON.stringify(USERS);
console.log(USERS);
