import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: import.meta.env.SECRET_DATABASE_URL
    }
  }
})

const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma
  }
})

builder.prismaObject('Game', {
  fields: t => ({
    id: t.exposeID('id'),
    player1: t.relation('player1'),
    player2: t.relation('player2'),
    outcome: t.exposeString('outcome')
  })
})

builder.prismaObject('User', {
  fields: t => ({
    id: t.exposeID('id'),
    name: t.exposeString('name', {
      nullable: true
    }),
    email: t.exposeString('email'),
    wins: t.exposeInt('wins')
  })
})

builder.queryType({
  fields: t => ({
    users: t.prismaField({
      type: ['User'],
      resolve: async () => {
        return prisma.user.findMany()
      }
    }),
    games: t.prismaField({
      type: ['Game'],
      resolve: async () => {
        return prisma.game.findMany()
      }
    }),
    user: t.prismaField({
      type: 'User',
      args: {
        id: t.arg.int({ required: true })
      },
      resolve: async (query, _, { id }) =>
        prisma.user.findUniqueOrThrow({
          ...query,
          where: { id }
        })
    }),
    game: t.prismaField({
      type: 'Game',
      args: {
        id: t.arg.int({ required: true })
      },
      resolve: async (query, _, { id }) =>
        prisma.game.findUniqueOrThrow({
          ...query,
          where: { id }
        })
    }),
    userGames: t.prismaField({
      type: ['Game'],
      args: {
        userId: t.arg.int({ required: true })
      },
      resolve: async (query, _, { userId }) =>
        prisma.game.findMany({
          ...query,
          where: { OR: [{ player1Id: userId }, { player2Id: userId }] }
        })
    })
  })
})

export const schema = builder.toSchema()
