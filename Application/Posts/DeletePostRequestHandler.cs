using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Posts
{
    public class DeletePostRequestHandler
    {
        public class Command : IRequest
        {
            public int PostId { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var post = await _context.Posts.FindAsync(request.PostId);

                _context.Remove(post);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}