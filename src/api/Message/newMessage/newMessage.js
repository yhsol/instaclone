import { prisma } from "../../../../generated/prisma-client";

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args) => {
        const { roomId } = args;
        return prisma.$subscribe
          .message({
            AND: [
              { mutation_in: "CREATED" },
              { ndoe: { room: { id: roomId } } }
            ]
          })
          .node();
      },
      resolve: payload => payload
    }
  }
};
