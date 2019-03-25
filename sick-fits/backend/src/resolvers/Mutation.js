const mutations = {
  async createItem(parent, args, ctx, info) {
    //TODO check if users are logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        },
      },
      info
    );
    //     global.dogs = global.dogs || []
    //     //create a dog
    //     const newDog = { name: args.name }
    //     global.dogs.push(newDog);
    //     return newDog;
    //  }
    // console.log(item);
    return item;
  }
};

module.exports = mutations;
