using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Posts.Any()) return;

            var posts = new List<Post>
            {
                new Post
                {
                    PostId = 1,
                    Title = "Post 1",
                    Content = "Dummy content for post 1"
                },
                new Post
                {
                    PostId = 2,
                    Title = "Post 2",
                    Content = "Dummy content for post 2"
                },
                new Post
                {
                    PostId = 3,
                    Title = "Post 3",
                    Content = "Dummy content for post 3"
                },
                new Post
                {
                    PostId = 4,
                    Title = "Post 4",
                    Content = "Dummy content for post 4"
                }
            };

            await context.Posts.AddRangeAsync(posts);
            await context.SaveChangesAsync();
        }
    }
}