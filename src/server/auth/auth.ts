import { client } from "../client.ts";

type ResponseType = { token: string; refreshToken: string };
type RequestType = { email: string; password: string };

const postLogin = client.createRequest<ResponseType, RequestType>()({ method: "POST", endpoint: "/auth/login" });
