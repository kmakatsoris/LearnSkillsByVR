using AutoMapper;
using Domain;
using MediatR;
using Persistence;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Posts
{
    public class EditPostRequestHandler
    {
        public class Command : IRequest
		{
			public Post Post { get; set; }
		}

		public class Handler : IRequestHandler<Command>
		{
        	private readonly DataContext _context;
            private readonly IMapper _mapper;
			public Handler(DataContext context, IMapper mapper)
			{
            	_context = context;
                _mapper = mapper;
			}

			public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
			{
				var post = await _context.Posts.FindAsync(request.Post.PostId);
				
				// post.Title = request.Post.Title ?? post.Title;
				// post.Content = request.Post.Content ?? post.Content;
                _mapper.Map(request.Post, post);

                await _context.SaveChangesAsync();

				return Unit.Value;
			}
		}


	}
}