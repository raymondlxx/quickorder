using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace QuickOrderAPI.Models
{
    public class BaseModel
    {
        [DataMember(Name = "id")]
        public string ID { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime UpdateTime { get; set; }

    }


    public class GetByQueryRequest
    {
        public PagingParam Paging { get; set; }

    }

    public class GetByQueryResponse<T> {
        public int TotalCount { get; set; }
        public int PageIndex { get; set; }
        public T Items { get; set; }
    }

    public class PagingParam
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
    }
}