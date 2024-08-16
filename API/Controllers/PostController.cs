using Application.Posts;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PostController : BaseApiController
    {

        [HttpGet("GetAllPosts")]
        public async Task<ActionResult<List<Post>>> GetPosts()
        {
            return await Mediator.Send(new PostAllRequestHandler.Query());            
        }

        [HttpGet("GetPostById/{id}")]
        public async Task<ActionResult<Post>> GetPostById(int id)
        {
            return await Mediator.Send(new PostDetailsRequestHandler.Query { PostId = id });            
        }

        [HttpPost("CreatePost")]
        public async Task<IActionResult> CreatePost([FromBody] Post post)
        {
            return Ok(await Mediator.Send(new CreatePostRequestHandler.Command { Post = post }));
        }

        [HttpPut("EditPost/{id}")]
        public async Task<IActionResult> EditPost(int id, Post post)
        {
            post.PostId = id;
            return Ok(await Mediator.Send(new EditPostRequestHandler.Command { Post = post }));
        }

        [HttpDelete("DeletePost/{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            return Ok(await Mediator.Send(new DeletePostRequestHandler.Command { PostId = id }));
        }
    }
}