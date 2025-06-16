import { HttpError } from "@/constants";
import { deleteAllArticles } from "@/lib/data/blog";
import { ApiResponse } from "@/types/api";
import { NextResponse } from "next/server";

type Result = Awaited<ReturnType<typeof deleteAllArticles>>;

export async function DELETE(
  request: Request,
): Promise<NextResponse<ApiResponse<Result>>> {
  const secret = request.headers.get("x-secret");
  if (secret !== process.env.SECRET) {
    return NextResponse.json(
      {
        error: {
          code: HttpError.UNAUTHORIZED.code,
          message: HttpError.UNAUTHORIZED.message,
        },
      },
      { status: HttpError.UNAUTHORIZED.status },
    );
  }

  try {
    const result = await deleteAllArticles();

    return NextResponse.json({
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          code: HttpError.INTERNAL_ERROR.code,
          message:
            error instanceof Error
              ? error.message
              : HttpError.INTERNAL_ERROR.message,
        },
      },
      { status: HttpError.INTERNAL_ERROR.status },
    );
  }
}
