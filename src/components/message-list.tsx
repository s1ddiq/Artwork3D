"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

type Message = {
  id: string;
  name: string;
  email: string;
  message: string;
  sent_from?: string;
  created_at: string;
};

export default function MessageList() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>();

  useEffect(() => {
    const f = async () => {
      const res = await fetch("/api/messages");
      const json = await res.json();
      setMessages(json.contact_messages);
      setLoading(false);
      console.log(json.contact_messages); // this should now be an array
      // console.log(json.contact_messages); // now this will be an array
    };
    f();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4">
      <h2 className="text-semibold text-3xl text-white">
        Any messages that come through will be displayed here.
      </h2>
      {messages?.map((m) => (
        <div
          key={m.id}
          className="rounded-2xl bg-zinc-900 text-white shadow-xl p-5 border border-zinc-700 relative"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{m.name}</h2>
              <span className="text-xs text-zinc-400">
                {new Date(m.created_at).toLocaleString()}
              </span>
            </div>

            <p className="text-sm text-zinc-400 mb-1">{m.email}</p>

            <p className="text-base text-zinc-100 leading-relaxed">
              {m.message}
            </p>
            <div className="group w-full cursor-pointer">
              <p
                className="text-zinc-400  opacity-0 group-hover:opacity-100"
                onClick={() =>
                  toast.info("Contact siddiq to know more about this message.")
                }
              >
                {m.id}:{m.sent_from}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Button
              className="w-full"
              onClick={() =>
                toast.success(
                  "This feature is not implemented jay tell me when u need it tho"
                )
              }
            >
              Reply
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
