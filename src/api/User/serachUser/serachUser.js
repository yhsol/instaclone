import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (__, args) =>
      prisma.users({
        where: {
          OR: [
            { userName_contains: args.term },
            { firstName_contains: args.term },
            { lastName_contains: args.term }
          ]
        }
      })
  }
};
