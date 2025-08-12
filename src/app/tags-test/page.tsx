"use client";

import React, { useState } from "react";
import { MultiSelect } from "@/components/multi-select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TagsTestPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>(["react", "typescript"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Predefined options for demonstration
  const predefinedTags = [
    { label: "React", value: "react" },
    { label: "TypeScript", value: "typescript" },
    { label: "JavaScript", value: "javascript" },
    { label: "Next.js", value: "nextjs" },
    { label: "Tailwind CSS", value: "tailwind" },
    { label: "Node.js", value: "nodejs" },
  ];

  const categories = [
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
    { label: "Mobile", value: "mobile" },
    { label: "DevOps", value: "devops" },
  ];

  const skills = [
    { label: "Programming", value: "programming" },
    { label: "Design", value: "design" },
    { label: "Management", value: "management" },
    { label: "Communication", value: "communication" },
  ];

  return (
    <div className='container mx-auto py-8 px-4 max-w-4xl'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>Multi-Select Tags Test</h1>
        <p className='text-muted-foreground'>
          Test the dynamic tag input functionality. Type in the search box and press Enter to add
          new tags!
        </p>
      </div>

      <div className='space-y-6'>
        {/* Tags Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tags Input</CardTitle>
            <CardDescription>
              Type any text and press Enter to add it as a tag. You can also select from predefined
              options.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <MultiSelect
              options={predefinedTags}
              onValueChange={setSelectedTags}
              defaultValue={selectedTags}
              placeholder='Type to add tags or select from options...'
              searchable={true}
              autoSize={true}
              maxCount={10}
              singleLine={false}
              className='w-full'
            />

            <div className='mt-4'>
              <h4 className='font-medium mb-2'>Selected Tags:</h4>
              <div className='flex flex-wrap gap-2'>
                {selectedTags.length > 0 ? (
                  selectedTags.map((tag) => (
                    <Badge key={tag} variant='secondary'>
                      {tag}
                    </Badge>
                  ))
                ) : (
                  <span className='text-muted-foreground'>No tags selected</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories Section */}
        <Card>
          <CardHeader>
            <CardTitle>Categories with Dynamic Input</CardTitle>
            <CardDescription>
              Mix of predefined categories and dynamic input. Try typing "AI" or "Machine Learning"
              and press Enter.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <MultiSelect
              options={categories}
              onValueChange={setSelectedCategories}
              defaultValue={selectedCategories}
              placeholder='Select categories or add new ones...'
              searchable={true}
              autoSize={true}
              maxCount={8}
              variant='secondary'
              className='w-full'
            />

            <div className='mt-4'>
              <h4 className='font-medium mb-2'>Selected Categories:</h4>
              <div className='flex flex-wrap gap-2'>
                {selectedCategories.length > 0 ? (
                  selectedCategories.map((category) => (
                    <Badge key={category} variant='outline'>
                      {category}
                    </Badge>
                  ))
                ) : (
                  <span className='text-muted-foreground'>No categories selected</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>Skills with Compact Layout</CardTitle>
            <CardDescription>
              Single line layout with horizontal scroll. Perfect for space-constrained interfaces.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <MultiSelect
              options={skills}
              onValueChange={setSelectedSkills}
              defaultValue={selectedSkills}
              placeholder='Add your skills...'
              searchable={true}
              autoSize={true}
              maxCount={6}
              singleLine={true}
              variant='default'
              className='w-full'
            />

            <div className='mt-4'>
              <h4 className='font-medium mb-2'>Selected Skills:</h4>
              <div className='flex flex-wrap gap-2'>
                {selectedSkills.length > 0 ? (
                  selectedSkills.map((skill) => (
                    <Badge key={skill} variant='default'>
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <span className='text-muted-foreground'>No skills selected</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-3 text-sm'>
              <div className='flex items-start gap-2'>
                <Badge variant='outline' className='mt-0.5'>
                  1
                </Badge>
                <p>Click on any multi-select component to open the dropdown</p>
              </div>
              <div className='flex items-start gap-2'>
                <Badge variant='outline' className='mt-0.5'>
                  2
                </Badge>
                <p>Type any text in the search input field</p>
              </div>
              <div className='flex items-start gap-2'>
                <Badge variant='outline' className='mt-0.5'>
                  3
                </Badge>
                <p>
                  Press <kbd className='px-1 py-0.5 bg-muted rounded text-xs'>Enter</kbd> to add it
                  as a new tag
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <Badge variant='outline' className='mt-0.5'>
                  4
                </Badge>
                <p>You can also select from predefined options by clicking on them</p>
              </div>
              <div className='flex items-start gap-2'>
                <Badge variant='outline' className='mt-0.5'>
                  5
                </Badge>
                <p>
                  Use <kbd className='px-1 py-0.5 bg-muted rounded text-xs'>Backspace</kbd> on empty
                  input to remove the last tag
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* JSON Output */}
        <Card>
          <CardHeader>
            <CardTitle>Data Output</CardTitle>
            <CardDescription>Real-time data from all multi-select components</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className='bg-muted p-4 rounded-lg text-sm overflow-x-auto'>
              {JSON.stringify(
                {
                  tags: selectedTags,
                  categories: selectedCategories,
                  skills: selectedSkills,
                },
                null,
                2
              )}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
