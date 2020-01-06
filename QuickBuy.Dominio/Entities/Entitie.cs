using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public abstract class Entitie
    {
        private List<string> _messageValidation { get; set; }

        private List<string> MessageValidation
        {
            get { return _messageValidation ?? (_messageValidation = new List<string>()); }
        }

        protected void ClearMessageValidation()
        {
            MessageValidation.Clear();
        }

        protected void AddWarning(string message)
        {
            MessageValidation.Add(message);
        }

        public string GetMessageValidation()
        {
            return string.Concat(_messageValidation);
        }

        public abstract void Validate();

        public bool IsValid
        {
            get { return !MessageValidation.Any(); } 
        }
    }
}
