<?php
class File
{
    public $name;
    public $date;
    public $lastDate;
    public $type;
    public $size;
    public $path;

    public function __construct($name, $date, $lastDate, $extension, $size, $path)
    {
        $this->name = $name;
        $this->date = $date;
        $this->lastDate = $lastDate;
        $this->type = $extension;
        $this->size= $size;
        $this->path = $path;
    }
}
