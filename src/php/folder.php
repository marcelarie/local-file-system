<?php
class Folder
{
    public $name;
    public $date;
    public $lastDate;
    public $size;
    public $dir;

    public function __construct($name, $date, $lastDate, $size, $dir='dir')
    {
        $this->name = $name;
        $this->date = $date;
        $this->lastDate = $lastDate;
        $this->size= $size;
        $this->dir= $dir;
    }
    public function get_name()
    {
        return $this->name;
    }
}
