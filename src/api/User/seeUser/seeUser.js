import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: (__, args, { request }) => {
      const { id } = args;
      return prisma.user({ id });
    }
  }
};
