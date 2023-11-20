.. title: My Code File
.. image:: jpeg.jpeg
    :alt: Image
    :height: 100px
    :width: 200px

****************************** 
.rst file to html 
******************************

italic :	    *italic*

bold :	    **bold**	

link :	    `File Converter<https://cloudconvert.com/>`	

verbatim :	``Some text or code``

programming languages:

* html
* css
* python

Computer engineering trends:

1. Programming
2. Software Engineer
3. Artificial intelligence


+------------------------+-------------+-----------+
| Header row 1           |   Header2   |    Header3|
+========================+=============+===========+
| body row 2             |     HTML    |  Python   |
+------------------------+-------------+-----------+
| body row 2             |    .html    |  .rst     |
+------------------------+-------------+-----------+

لیست
======

لیست زیر شامل نام‌های چند شهر معروف است:

* تهران
* شیراز
* اصفهان
* مشهد
* تبریز

کلاس
======

.. code-block:: python

    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age
       
        def greet(self):
            print(f"Hello, my name is {self.name} and I am {self.age} years old.")

    person1 = Person("John", 30)
    person1.greet()


.. code-block:: python

    def greet(name):
        print(f"Hello, {name}!")

    greet("World")

جدول زیر استفاده از csv-table

.. csv-table::
   :header: "Name", "Age", "Gender"
   :widths: 15, 10, 10

   "John Doe", 30, "Male"
   "Jane Smith", 25, "Female"
   "Bob Johnson", 40, "Male"

list_table
==========

جدول زیر نمونه‌ای از استفاده از دایرکتیو list_table در RST است:

.. list-table::
   :widths: 15, 10, 10
   :header-rows: 1

   * - Name
     - Age
     - Gender
   * - John Doe
     - 30
     - Male
   * - Jane Smith
     - 25
     - Female
   * - Bob Johnson
     - 40
     - Male


grid
====


.. grid:: 3x3
  :widths: 10 20 30
  +------------+------------------------+--------------------------+
  | Cell 1     | Cell 2                 | Cell 3                   |
  +============+========================+==========================+
  | Row 2, Col | Row 2, Col 2           | Row 2, Col 3             |
  +------------+------------------------+--------------------------+
  | Row 3, Col | Row 3, Col 2           | Row 3, Col 3             |
  +------------+------------------------+--------------------------+

