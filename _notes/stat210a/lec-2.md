---
layout: note
title: "Stat 210A Lecture 2: Estimation, Loss, Risk, Exponential Families"
date: 2018-08-28
class: stat210a
author: Max Ovsiankin
lecturer: Will Fithian
---

# Review

- A measure space is a triple $(X, \mathscr{F}, \mu)$ with $\mu \colon \mathscr{F} \to [0, \infty)$.
$\mu(A)$ defines the "weight" we place on A.
- On every measure space we can take integrals $\int f(x) d \mu(x)$.
- If $P \ll \mu$, a density is a function such that:
    $$ P(A) = \int 1_A(x) p(x) d \mu(x) = \int_A p(x) d \mu(x)$$
    And we have that for any integral $\int f dP = \int f p d \mu$.

__Example.__

- Let $X$ be countable, take $\mathscr{F} = 2^X$.
    Then $\#(A) =$ cardinality.
- $X = \mathbb{R}^n$, take $\mathscr{F} = \beta$ (the borel $\sigma$-field). 
    Then $\lambda(A) = \int 1_A(x) dx_1 \ldots dx_n$.

That's enough probability, let's talk statistics.

# Estimation

::: defn
A _statistical model_ is a family of distributions:

$$ P = \{ P_\theta \colon \theta \in \Theta \} $$
:::

::: defn
A _statistic_ is any function $T(X)$ of our data $X \sim P_\theta$ that cannot depend on $\theta$.
:::

The goal of estimation is to guess our _estimand_, $g(\theta)$ from observed data $X \sim P_\theta$.

An _estimator_ $\delta(X)$ of $g(\theta)$ is a statistic which is meant to approximate $g(\theta)$.
There is no formal definition here, only terminology, but we will discuss ways to compare estimators.

__Example.__ _(Keener 3.1)_
Let's flip a biased coin $n$ times.

- Let $\Theta$ = probability of the coin landing heads. $\Theta = [0, 1]$
- Let $X$ = number of heads after $n$ flips. $X \sim \text{Binom}(n, \theta)$ 
- $P_\theta(x) = \theta^x(1 - \theta)^{n-x} \binom{n}{x}$

A natural estimator of $\theta$ is $\delta_0(x) = \frac{x}{n}$.

Is this a good estimator? Are there better estimators?
That question is very context-dependent, and there is often no good answer.

# Loss and Risk

::: defn
A _loss function_ $L(\theta, d)$ measures how bad the loss is for some statistic $d(X)$.
$\theta$ is the true value of our hidden $\theta$, and $d$ is our guess for $g(\theta)$.
:::

__Example.__ $L(\theta, d) = (d - g(\theta))^2$ is the most common loss, called the squared error loss.

We have some typical properties of loss functions.
They are not required, but they are common and desireable:

- $L(\theta, d) \geq 0$ for all $\theta, d$
- $L(\theta, g(\theta)) = 0$ 

The loss function only quantifies a specific guess $d$, not our method for making that guess.
This means that it measures if we choose a good estimator _and_ get lucky in our data.
This motivates the need for a function that encapsulates loss we get on average:

::: defn
A _risk function_ $R(\theta, \delta(\cdot)) = \mathbb{E}_\theta[L(\theta, \delta(X))]$ is the expected
loss from an estimator $\delta(X)$, with expectation taken over distribution $P_\theta$.
:::

__Example.__ If we take squared-error loss, then we get

$$R(\theta, \delta(\cdot)) = \mathbb{E}_\theta[(g(\theta) - \delta(X))^2]$$

This is called the _mean squared error_ (MSE).

__Example.__ _(3.1 biased coin toss continued)_

We have that $\delta_0(x) = \frac{x}{n}$.
As $\mathbb{E}_\theta\left[\frac{x}{n}\right] = \theta$, this estimator is unbiased.
Then $$\text{MSE}(\theta, \delta) = \text{var}_\theta\left(\frac{x}{n}\right) = \frac{1}{n}\theta(1-\theta)$$

(draw diagram) Let's consider some other estimators:

- $\delta_1(x) = \frac{x+3}{n}$
- $\delta_2(x) = \frac{x+3}{n+6}$

$\delta_2$ is like $\delta_0$, but also adding on pretend data of $3$ out of $6$ initial heads.
This biases it toward $1/2$.

In the above example, $\delta_1$ is worse than $\delta_0$ on all possible values of $\theta$.
Such an estimator is essentially useless if we are interested in mean error.
The next definition encapsulates this idea:

::: defn
An estimator $\delta$ is _inadmissible_ if $\exists \delta^*$ with:

1. $R(\theta, \delta^*) \leq R(\theta, \delta)$ for all $\theta \in \Theta$
2. $R(\theta, \delta^*) < R(\theta, \delta)$ for some $\theta \in \Theta$

We say that $\delta^*$ _strictly dominates_ $\delta$.
:::

There's often not a "best" estimator.
Even here, the best estimator for $1/2$, for instance, is the constant estimator which can never be beat.

We have several strategies to resolve this ambiguity imposed by risk functions:

1. Summarize our $R(\theta, \delta)$ as a scalar.
    a. Average-case risk: minimize $\int_\Theta R(\theta, \delta) d \Lambda(\theta)$
        for some $\Lambda$ we choose wisely.

        Although this is a frequentist perspective, we are looking at a Bayes estimator with $\Lambda$ being a prior.
        Right now we are just using it as a way to resolve ambiguity.
        We can utilize bayes estimators even without the concept of a prior.

    b. Worst-case risk: minimize $\sup_{\theta \in \Theta} R(\theta, \delta)$

        This is called the minimax estimator.
        For an interpretation, we can look to game theory.
        As a thought experiment, I choose an estimator.
        Then nature is adverserial, choosing the worst possible $\theta$ for the estimator I picked.
        The minimax estimator is the best estimator we can play knowing that nature will try to foil us.
2. Constrain the choice of estimators.
    For example, only consider unbiased estimators\
    ($\mathbb{E}_\theta(\delta(x)) = g(\theta) \ \forall \theta$).
    Note that bayes estimator are usually not unbiased

# Exponential families
Now we start talking about exponential families with an eye towards sufficiency.
These are going to be fundamental building blocks we will use the whole semester.

In the following, $x'$ refers to the transpose of a matrix/vector $x$, as we may want to put
$T$ in exponent.

::: defn
An _$s$-parameter exponential family_ is a family of probability densities $\{ p_\eta \colon \eta \in \Xi \}$ w.r.t a measure $\mu$ \on $X$ of the form:

$$ p_\eta(x) = \exp \{ \eta' T(x) - A(\eta) \} h(x) $$

We call:

- $T \colon X \to \mathbb{R}^s$ the _sufficient statistic_ (more in the next lecture)
- $h \colon X \to [0, \infty)$ the _carrier density_/_base density_
- $\eta \in \Xi \subset \mathbb{R}^s$ a _parameter_ $\in$ the _parameter space_
- $A \colon \Xi \to \mathbb{R}$ the _cumulant generating function_ (explained in the lecture to come), which is basically just a normalizing constant
:::

From this definition, it may appear that we have a huge number of degrees of freedom.
But there is a natural way to understand exponential families, which we will work up to.
An exponential family is like a hyperplane in the space of probability densities.
$h$ is like a point, and $T$ describes possible translations we can make inside the hyperplane.

Almost every distribution is an exponential family.
You name it: Normal, Possion, Binomial, power-law.
Surely any distribution on you can find on Wikipedia is an exponential family.
Exponential distributions are really nice and turn out to have some nice properties.

We can think of $A(\eta)$ as just a normalizing constant, totally determined by $T$ and $h$.
Consider the fact that:

$$ \int e^{\eta'T(x)}e^{-A(\eta)} h(x) d \mu(x) = 1$$

Therefore we can define $A(\eta)$ as follows:

$$ A(\eta) = \log\left[\int_x e^{\eta'T(x)} h(x) d \mu(x) \right] $$

We say that $P_\eta$ is _normalizable_ only if $A(\eta) < \infty$.
The _natural parameter space_ is all allowable $\eta$ under this condition:

$$\{ \eta \in \mathbb{R}^s \colon A(\eta) < \infty \}$$

We say that an exponential family with parameter space $\Xi$ is in _canonical form_ if $\Xi$ is the natural parameter space,
i.e. it contains all possible normalizable densities.

Note that there are several symmetries, or ways we could transform an exponential family, yet have it describe the
same set of distributions:

- Provided $\xi \in \Xi$, change:
    $$h \mapsto \tilde{h}(x) = p_\xi(x)$$
    $$A(\eta) \mapsto \tilde{A}(\eta) = A(\eta) - A(\xi)$$

    This is changing our "zero" in $\Xi$ to be at $\xi$.
    In general $p_\xi(x) = e^{-A(\xi)}h(x)$, i.e. $p_\xi$ is just the normalized carrier density.
- Suppose $M \in \mathbb{R}^{s \times s}$ is invertible. Then change:
    $$T(x) \mapsto \tilde{T}(x) = M T(x) $$
    $$ \eta \mapsto (M^{-1})' \eta $$
- Change:
    $$ \mu \mapsto \tilde{\mu} \qquad \text{ s.t. } \frac{d \tilde{\mu}}{d \mu} = h$$ 
    $$ h \mapsto \tilde{h}(x) = 1 $$

This is all to say there is a lot of redundancy here.
We can think of $h$ as a starting point in the space of probability distributions, and T gives us a
vector of directions we can "translate" along.

Then the interpretation of an exponential family in this class is as follows:

- Start with a base probability measure $p_0$
- Apply an _exponential tilt_:
    1. Multiply density by $e^{\eta'T(x)}$

        This is a way to translate. $T(x)$ gives us directions as probability densities, and
        $\eta$ selects a linear combination of those directions.
    2. Renormalize with $e^{-A(\eta)}$

As a heuristic, exponential families are a generalization of the hyperplane in the the space of probability densities.

Next time, we will show what it "looks like" to exponentially tilt a distribution.
