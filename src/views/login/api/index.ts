import http from "../../../http/index";
import { LoginFormDto } from "../../../types/login";

export function login(data: LoginFormDto) {
  return http({
    method: "POST",
    url: "/login",
    data,
  });
}
