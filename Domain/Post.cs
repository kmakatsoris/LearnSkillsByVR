using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Post
    {
        public int PostId { get; set; } // it could be string/ Guid
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;

        // public DateTime Date { get; set; }
    }
}