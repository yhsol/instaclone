import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragment";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      const post = await prisma.post({ id });
      const comment = await prisma
        .post({ id })
        .comments()
        .$fragment(COMMENT_FRAGMENT);
      const files = await prisma.post({ id }).files();
      const user = await prisma.post({ id }).user();
      return {
        post,
        comment,
        files,
        user
      };
    }
  }
};

// files 를 조회할 때 comment 부분 코드가 에러 남. comment 코드 없이 하면 잘 작동 됨.
// comment 호출 시 comment() 가 아니라 comments() 여야 된다. prisma 에 설정되어 있는 값인 듯.
