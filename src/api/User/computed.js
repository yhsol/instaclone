import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    post: ({ id }) => prisma.user({ id }).post(),
    following: ({ id }) => prisma.user({ id }).following(),
    follower: ({ id }) => prisma.user({ id }).follower(),
    like: ({ id }) => prisma.user({ id }).like(),
    comment: ({ id }) => prisma.user({ id }).comment(),
    room: ({ id }) => prisma.user({ id }).room(),
    postsCount: ({ id }) =>
      prisma
        .postsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
    followingCount: ({ id }) =>
      prisma
        .usersConnection({ where: { followers_some: { id } } })
        .aggregate()
        .count(),
    followersCount: ({ id }) =>
      prisma
        .usersConnection({ where: { following_none: { id } } })
        .aggregate()
        .count(),
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return await prisma.$exists.user({
          AND: [{ id: user.id }, { id: parentId }]
        });
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    itsMe: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};
