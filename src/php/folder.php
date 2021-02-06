<?php
class Folder
{
    public $name;
    public $date;
    public $lastDate;
    public $size;
    public $dir;
    public $path;

    public function __construct($name, $date, $lastDate, $size, $path, $dir='dir')
    {
        $this->name = $name;
        $this->date = $date;
        $this->lastDate = $lastDate;
        $this->size= $size;
        $this->dir= $dir;
        $this->path = $path;
    }
}
