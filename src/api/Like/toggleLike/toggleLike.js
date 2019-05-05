import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleLike: async (__, args, { request }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      const filterOption = {
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            post: {
              id: postId
            }
          }
        ]
      };
      try {
        const existingLike = await prisma.$exists.like(filterOption);
        if (existingLike) {
          await prisma.deleteManyLikes(filterOption);
        } else {
          await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: post.id
              }
            }
          });
        }
        return true;
      } catch {
        return false;
      }
    }
  }
};
