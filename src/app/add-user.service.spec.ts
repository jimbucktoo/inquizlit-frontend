import { TestBed } from "@angular/core/testing";

import { AddNewUserService } from "./add-user.service";

describe("AddUserService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AddNewUserService = TestBed.get(AddNewUserService);
    expect(service).toBeTruthy();
  });
});
