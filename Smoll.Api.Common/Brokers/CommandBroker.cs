﻿using System.Collections.Generic;
using Smoll.Messages.Contracts;

namespace Smoll.Api.Common.Brokers
{
    public class CommandBroker : ICommandBroker
    {
        private static IList<ICommand> EventStream { get; } = new List<ICommand>();

        public void Send(ICommand command)
        {
            EventStream.Add(command);
        }
    }
}
