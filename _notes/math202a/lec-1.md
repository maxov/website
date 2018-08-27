---
layout: note
title: "Math 202A Lecture 1: Administrivia, Metric Spaces"
date: 2018-08-22
class: math202a
author: Max Ovsiankin
---

# Administrivia

- [Math 202A Fall 2018: Introduction to Topology and Analysis](https://math.berkeley.edu/~rieffel/202AannF18.html)
- __Meets__ Mon/Wed/Fri From 9-10 am
- __Lecturer__: [Marc Rieffel](https://math.berkeley.edu/~rieffel)
- __Textbook__: No _required_ textbook. 4 textbooks are freely downloadable from the web with a Cal student account.
The closest textbook overall is Lang, but the course will not follow any text closely, mirroring different texts at different times.
- __Assignments__:
    - Roughly weekly problem sets
    - Midterm exam
        - During regular class meeting time
        - Potential dates: (will put to vote)
            - Friday, October 26
            - Monday, October 29
            - Wednesday, October 31
    - Final exam
- __Office hours__:
    - Office: 811 Evans
    - Monday 10-10:45 am
    - Wednesday 10-10:45 am, 1:30-2:30 pm
    - Friday 10-10:30 am

# About Rieffel

Rieffel researches _noncommutative geometry_, which uses the same math used in quantum physics, extending geometrical concepts to a noncommutative setting. It draws on a lot of mathematics, and contributes to lots of fields.

# Course Structure

202A and 202B come as a pair teaching tools for topology and analysis.

202A:

- week 1: metric spaces
- 7 weeks: general topology
- second half: measure theory and integration

202B:

- more of all of the topics in 202A
- The connections between measure theory and integration with topology
- Functional analysis

# Metric Spaces

__Definition.__ Let $X$ be a set. By a _metric_ on $X$, we mean a function $d \colon X \times X \to \mathbb{R}^+$ such that:

1. Symmetric $d(x, y) = d(y, x)$ for $x, y \in X$
2. Triangle inequality $d(x, y) \leq d(x, z) + d(z, y)$ for $x, y, z \in X$
3. $d(x, x) = 0$ iff x = y

A metric provides a specification of "distance" on a set. Note that here, $\mathbb{R}^+$ includes 0. Depending on the context it may not, or may include $+\infty$ as well.

__Definition.__ If instead for property 3 we only have that $d(x, x) = 0$ for $x \in X$, we say $d$ is a _semi-metric_ or
_pseudo-metric_.

A set can have many metrics.
For example, consider distances around Berkeley. The distance walking around can be different from the distance biking, or the distance driving or flying.
Under the "walking" metric, the distance between two islands separated by sea can be $+\infty$, but in this case it could be better to consider the islands as two separate sets.

__Examples__

- $\mathbb{R}$ with metric $d(s, t) = |s - t|$

- $\mathbb{R}^n$, with elements $v = (\alpha_j), w = (\beta_j)$
  - $d_2(v, w) = \sqrt{\sum (\alpha_j - \beta_j)^2}$ (_Euclidean_ distance)
  - $d_1(v, w) = \sum | \alpha_j - \beta_j |$
  - $d_\infty(v, w) = \sup_j \{ | \alpha_j - \beta_j \}$ (if finite, then simple $\max$)
  - $d_p(v, w) = {\left(\sum (\alpha_j - \beta_j)^p\right)}^{(1/p)}$, $1 \leq p < \infty
  
- If $S \subset X$, then $d|_S$, the restriction of $d$ to $S$ is a metric on $S$.

__Definition.__ Let $V$ be a vector space over $\mathbb{R}$ or $\mathbb{C}$.
By a _norm_ on $V$ we mean a function $\| \cdot \| \colon V \to \mathbb{R}^+$ where:

1. $\| z v \| = |z| \| v \|$ for $z \in \mathbb{R}$ or $\mathbb{C}$, $v \in V$
2. $\| v + w \| \leq \|v \| + \| w \|$
3. If $\| v \| = 0$, then $v = 0_V$

__Definition.__ If $\| \cdot \|$ only has the first two properties, we call it a _seminorm_.

From a norm we get a metric on $V$ by $d(v, w) = \| v - w \|$.

__Examples__

- On $\mathbb{R}^n$ or $\mathbb{C}^n$:
    - $\| v \|_1 = \sum | \alpha_j |$
    - $\| v \|_2 = {\left(\sum |\alpha_j|^2 \right)}^{(1/2)}$ 
    - $\| v \|_p = {\left(\sum |\alpha_j|^p \right)}^{(1/p)}$ 
    - $\| v \|_\infty = \max_j \{  | v_j| \}$

- Now we get more into the functional analysis sort of things. Let $V = C([0, 1])$, the vector space of continuous functions from the unit interval $[0, 1]$ to $\mathbb{R}$.
    - $\| f \|_\infty = \sup \{ | f(r) | \ \colon r \in [0, 1] \}$, the _uniform norm_
    - $\| f \|_1 = \int_0^1 | f(r) | dr$, note the analogy to sums in $\| \cdot \|_1$ for finite vector spaces
    - $\| f \|_2 = \left(\int_0^1 | f(r) |^2 dr\right)^{(1/2)}$, important and used in fourier analysis
    - $\| f \|_p = \left(\int_0^1 | f(r) |^p dr\right)^{(1/p)}$, for $1 \leq p < \infty$

A metric space could have a variety of metrics defined on it, and a vector space could have a variety of norms.
In functional analysis, for instance, our spaces are metric/vector spaces of functions.

Within multiple fields of math, the study of objects/spaces may be interesting enough by itself, but the structure of transformations between objects is often more interesting and complicated than the structure of the objects.
For example, we study linear transformations between two vector spaces in linear algebra.

This is the starting point of _category theory_, where we study objects and transformations (called _morphisms_) between those objects. A category is just a view of some 'type' of transformation on its objects. The major requirement is that morphisms compose, i.e. if we have a morphism from A to B and one from B to C, then there must be a morphism from A to C that consists of the action of both in sequence.

What should the appropriate functions of study be between metric spaces? Let's see some examples.

__Definition.__ Let $f \colon X \to Y$ be a function, with $X$ and $Y$ metric spaces.

1. $f$ is _isometric_ or _an isometry_ if $d_Y(f(x_1), f(x_2)) = d_X(x_1, x_2)$ for $x_1, x_2 \in X$. (this implies it is also one to one, but $f$ need not be onto)
2. If there is a constant, $k_f > 0$ (depending on $f$) such that $d_Y(f(x_1), f(x_2)) \leq k_f d_X(x_1, x_2)$ for $x_1, x_2 \in X$, then $f$ is said to be _Lipschitz_. The smallest $k_f$ is the _Lipschitz constant_ of $f$
3. $f$ is _uniformly continuous_ if $\forall \epsilon > 0$ $\exists \delta > 0$ s.t. for any $x_1, x_2 \in X$, if $d_X(x_1, x_2) < \delta$ then $d_Y(f(x_1), f(x_2)) < \epsilon$.
4. $f$ is _continuous_ if (we should all know this, fill this in) for all $p \in X$, $\forall \epsilon > 0$, $\exists \delta > 0$ s.t. for all $x \in X$, if $d_X(p, x) < \delta$ then $d_Y(f(p), f(x)) < \epsilon$.

We can build different categories between metric spaces depending on what function definition we choose to look at for our "morphisms".

Some assorted remarks:

- Let $(X, d)$ be a metric space, and $S \subset X$. Then $f \colon S \hookrightarrow X$ with $x \mapsto x$ is the inclusion map, which is an isometry.
- If $f$ is isometric and also onto, then $f$ is viewed as an _isomorphism_ between $(X, d_X)$ and $(Y, d_Y)$.
- The Lipschitz definition is used in the existence theorem for solutions of ODEs.
- Lipschitz implies uniformly continuous