<?php

class Message
{
    protected int $id;
    protected int $receptor; //id of receptor
    protected int $sender; // id of sender
    protected int $discussion; // id of discussions
    protected string $content;

    public function __construct(int $id, int $receptor, int $sender, int $discussion, string $content)
    {
        $this->id = $id;
        $this->receptor = $receptor;
        $this->sender = $sender;
        $this->discussion = $discussion;
        $this->content = $content;
    }

    public function id(): int
    {
        return $this->id;
    }

    public function receptor(): int
    {
        return $this->receptor;
    }

    public function sender(): int
    {
        return $this->sender;
    }

    public function discussion(): int
    {
        return $this->discussion;
    }

    public function content(): string
    {
        return $this->content;
    }
}
