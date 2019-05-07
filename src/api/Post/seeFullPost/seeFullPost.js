import { prisma } from "../../../../generated/prisma-client";
import { FULL_POST_FRAGMENT } from "../../../fragment";

export default {
  Query: {
    seeFullPost: (_, args) => {
      const { id } = args;
      return prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
    }
  }
};

// files 를 조회할 때 comment 부분 코드가 에러 남. comment 코드 없이 하면 잘 작동 됨.
// comment 호출 시 comment() 가 아니라 comments() 여야 된다. prisma 에 설정되어 있는 값인 듯.
