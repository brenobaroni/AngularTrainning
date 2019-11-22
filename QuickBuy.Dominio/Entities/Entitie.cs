using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entities
{
    public abstract class Entitie
    {
        public List<string> _messageValidation { get; set; }

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

        public abstract void Validate();

        protected bool IsValid
        {
            get { return !MessageValidation.Any(); } 
        }
    }
}
