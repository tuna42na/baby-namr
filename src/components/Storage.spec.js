import Storage from "./Storage";

let LOCAL_STOR_USER;
const setMockUser = () => {
  Storage.Set(LOCAL_STOR_USER, { currentUser: "user", token: "token" });
};

describe("Storage", () => {
  it("User is Added Locally", () => {
    setMockUser();
    expect(localStorage.LOCAL_STOR_USER).not.toBeNull();
  });

  it("User information is called and returned", () => {
    setMockUser();

    expect(Storage.Get(LOCAL_STOR_USER)).toEqual({
      currentUser: "user",
      token: "token",
    });
  });

  it("User session is cancelled", () => {
    setMockUser();
    Storage.Clear(LOCAL_STOR_USER);
    expect(localStorage.LOCAL_STOR_USER).toBeUndefined();
  });
});
