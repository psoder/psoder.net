export interface Project {
    title: string;
    id: string;
    url: string;
    description: string;
    image?: string;
}

export type AsyncState<T, E = string> =
    | {
          status: "uninitialized";
      }
    | {
          status: "loading";
      }
    | {
          status: "success";
          data: T;
      }
    | {
          status: "error";
          error: E;
      };

export type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

export const ok = <T>(value: T): Result<T, never> => ({
    ok: true,
    value,
});

export const err = <E>(error: E): Result<never, E> => ({
    ok: false,
    error,
});
